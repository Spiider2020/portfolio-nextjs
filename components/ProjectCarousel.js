import React, { useState, useRef, useEffect } from 'react';
import { Section } from '../styles/GlobalComponents';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SmallProjects } from '../constants/sitedata';
import { cardSizes } from '../constants/projectCarouselSettings';
import useScrollBlock from '../helpers/useScrollBlock';
import {
	ProjectCarouselFull,
	ProjectCarouselContainer,
	MobileScrollNode,
	ProjectItem,
	ProjectItemTitle,
	ProjectItemText,
} from './styled/ProjectCarouselStyles';

const PROJECT_COUNT = SmallProjects.length;

export default function ProjectCarousel() {
	const [activeItem, setActiveItem] = useState(0);
	const [size, setSize] = useState({});
	const [chevronSize, setChevronSize] = useState();
	const [blockScroll, allowScroll] = useScrollBlock();
	const projectCarouselRef = useRef();

	const scroll = (node, left) => {
		if (node !== null) {
			return node.scrollTo({ left, behavior: 'smooth' });
		}
		return;
	};

	const handleWheel = (e) => {
		let cardWidth = size.width + size.gap;
		// console.log(e);
		if (e.deltaY > 0) {
			scroll(projectCarouselRef.current, (activeItem + 1) * cardWidth);
		} else {
			scroll(projectCarouselRef.current, (activeItem - 1) * cardWidth);
		}
	};

	const handleScroll = () => {
		let cardWidth = size.width + size.gap;
		if (projectCarouselRef.current) {
			const index = Math.round(projectCarouselRef.current.scrollLeft / cardWidth);
			setActiveItem(index);
		}
	};

	const handleClickPrev = () => {
		let cardWidth = size.width + size.gap;
		if (activeItem === 0) {
			return;
		} else {
			scroll(projectCarouselRef.current, (activeItem - 1) * cardWidth);
			setActiveItem(activeItem - 1);
		}
	};

	const handleClickNext = () => {
		let cardWidth = size.width + size.gap;
		if (activeItem >= SmallProjects.length - size.visible) {
			return;
		} else {
			scroll(projectCarouselRef.current, (activeItem + 1) * cardWidth);
			setActiveItem(activeItem + 1);
		}
	};

	useEffect(() => {
		const div = projectCarouselRef.current;
		const handleMouseEnter = () => {
			blockScroll();
		};
		const handleMouseLeave = () => {
			allowScroll();
		};

		div.addEventListener('mouseenter', handleMouseEnter);
		div.addEventListener('mouseleave', handleMouseLeave);
		// clean-up
		return () => {
			div.removeEventListener('mouseenter', handleMouseEnter);
			div.removeEventListener('mouseleave', handleMouseLeave);
		};
	}, [allowScroll, blockScroll]);

	useEffect(() => {
		const updateSize = () => {
			if (window.innerWidth < 640) {
				setSize(cardSizes.sm);
				setChevronSize(20);
			} else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
				setSize(cardSizes.lg);
				setChevronSize(24);
			} else {
				setSize(cardSizes.xl);
				setChevronSize(24);
			}
		};
		updateSize();
		const handleResize = () => {
			updateSize();
			scroll(projectCarouselRef.current, 0);
		};

		window.addEventListener('resize', handleResize);
	}, []);

	return (
		<Section>
			<h2>Small Projects</h2>
			<ProjectCarouselFull>
				<FaChevronLeft
					size={chevronSize}
					style={
						activeItem === 0 ? { opacity: '0.3', cursor: 'default' } : { opacity: '1', cursor: 'pointer' }
					}
					onClick={handleClickPrev}
				/>
				<ProjectCarouselContainer ref={projectCarouselRef} onWheel={handleWheel} onScroll={handleScroll}>
					{SmallProjects.map((item, index) => (
						<MobileScrollNode key={index} final={index === PROJECT_COUNT - 1}>
							<ProjectItem
								index={index}
								id={`project_item-${index}`}
								onClick={() => window.open(item.link)}
							>
								<ProjectItemTitle>{item.title}</ProjectItemTitle>
								<ProjectItemText>{item.info}</ProjectItemText>
							</ProjectItem>
						</MobileScrollNode>
					))}
				</ProjectCarouselContainer>
				<FaChevronRight
					size={chevronSize}
					style={
						activeItem >= SmallProjects.length - size.visible
							? { opacity: '0.3', cursor: 'default' }
							: { opacity: '1', cursor: 'pointer' }
					}
					onClick={handleClickNext}
				/>
			</ProjectCarouselFull>
		</Section>
	);
}
