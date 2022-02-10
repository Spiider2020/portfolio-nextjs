import React from 'react';
import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa';
import { Layout } from '../../components/Layout';
import { projects } from '../../constants/sitedata';
import Button from '../../styles/GlobalComponents/Button';
import {
	ProjectContainer,
	ImgGallery,
	ImgSelected,
	ImgNav,
	ImgNavItem,
	BackContainer,
	ProjectInfoContainer,
	ProjectDescription,
	LinkContainer,
	ProjectLink,
} from '../../components/styled/ProjectDetails';

export default function ProjectsDetails({ project }) {
	const changeSelected = (evt) => {
		const imgSrc = evt.target.attributes.src.value;
		const mainImg = document.querySelector('#main-img');
		mainImg.setAttribute('src', imgSrc);
		const prevSelected = document.querySelector('.selected-img');
		prevSelected.classList.remove('selected-img');
		evt.target.classList.add('selected-img');
	};

	const displayImgNav = () => {
		let items = [];
		for (let i = 1; i <= project.imagesNr; i++) {
			items.push(
				<ImgNavItem
					key={'img-nav-' + i}
					src={'../' + project.imagesPath + i + '.png'}
					onClick={changeSelected}
					className={i === 1 ? 'selected-img' : ''}
				/>
			);
		}
		return items;
	};
	return (
		<Layout>
			<BackContainer>
				<Link href='/'>
					<a>
						<FaChevronLeft style={{ fontSize: '1.3rem' }} /> Go Back
					</a>
				</Link>
			</BackContainer>
			<ProjectContainer>
				<ImgGallery>
					<ImgSelected src={'../' + project.imagesPath + '1.png'} id='main-img' />
					<ImgNav>{displayImgNav()}</ImgNav>
				</ImgGallery>
				<ProjectInfoContainer>
					<h1>{project.title}</h1>
					<ProjectDescription>{project.description}</ProjectDescription>
					<LinkContainer>
						<Button alt='true' onClick={() => (window.location = project.source)}>
							Source Code
						</Button>
						<Button alt='true' onClick={() => (window.location = project.visit)}>
							Demo
						</Button>
					</LinkContainer>
				</ProjectInfoContainer>
			</ProjectContainer>
		</Layout>
	);
}

export async function getStaticPaths() {
	const paths = projects.map((prj) => ({ params: { id: prj.id.toString() } }));
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { id } }) {
	const project = projects.find((prj) => prj.id.toString() === id);
	return {
		props: {
			project: project,
		},
		revalidate: 1,
	};
}
