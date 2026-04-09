import Head from 'next/head';
import Link from 'next/link';

export default function About() {
	const skills = [
		{ label: 'Web Dev', items: ['PHP', 'Laravel', 'HTML/CSS', 'JavaScript'] },
		{ label: 'Database', items: ['MySQL', 'SQLite', 'Raw SQL', 'phpMyAdmin'] },
		{ label: 'Mobile', items: ['Kotlin', 'Android SDK'] },
		{ label: 'Tools', items: ['Git', 'VS Code', 'Vercel', 'Postman'] },
	];

	const projects = [
		{
			name: 'Aplikasi Web RESTfulAPI',
			desc: 'Aplikasi web yang mengimplementasikan API pada web. Menggunakan Laravel dan juga Postman.',
			tag: 'Web',
		},
		{
			name: 'Aplikasi Web CRUD',
			desc: 'Aplikasi web yang menggunakan metode CRUD dalam database dan menampilkan hasil nya pada web',
			tag: 'Web',
		},
		{
			name: 'Blog Pribadi ini',
			desc: 'Headless Hashnode blog dengan menggunakan next.js frontend di deploy di Vercel.',
			tag: 'Open Source',
		},
	];

	return (
		<>
			<Head>
				<title>About — Flint Blog</title>
				<meta
					name="description"
					content="Student developer from Indonesia passionate about web development and databases."
				/>
			</Head>

			<main className="mx-auto max-w-3xl px-6 py-16">
				<div className="mb-8">
					<Link
						href="/"
						className="inline-flex items-center gap-2 font-mono text-sm text-slate-500 transition hover:text-green-500 dark:text-slate-400 dark:hover:text-green-400"
					>
						← Back to Home
					</Link>
				</div>
				<div className="mb-12">
					<span className="font-mono text-sm uppercase tracking-widest text-green-500">
						About Me
					</span>
					<h1 className="mb-4 mt-3 text-4xl font-bold text-slate-900 dark:text-white">
						Hey, I am <span className="text-green-500">Akmal Khairan Rizaldi</span> 👋
					</h1>
					<p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
						Hello. I am Akmal Khairan Rizaldi, I am a student developer from Indonesia who is
						sincerely passionate about software engineering. From designing some UIs, organizing and
						updating databases, to troubleshooting my red code issues at 3AM and stressing out, its
						my everyday problem.
					</p>
				</div>

				<div className="mb-12 h-px bg-gradient-to-r from-green-500 via-blue-500 to-transparent" />

				<div className="mb-12">
					<h2 className="mb-6 font-mono text-xl font-bold text-slate-900 dark:text-white">
						What I Work With
					</h2>
					<div className="grid grid-cols-2 gap-4">
						{skills.map((cat) => (
							<div
								key={cat.label}
								className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800"
							>
								<div className="mb-2 font-mono text-xs uppercase tracking-widest text-green-500">
									{cat.label}
								</div>
								<div className="flex flex-wrap gap-2">
									{cat.items.map((item) => (
										<span
											key={item}
											className="rounded-md border border-slate-200 bg-white px-2 py-1 font-mono text-xs text-slate-700 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-300"
										>
											{item}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="mb-12">
					<h2 className="mb-6 font-mono text-xl font-bold text-slate-900 dark:text-white">
						Current Projects
					</h2>
					<div className="flex flex-col gap-4">
						{projects.map((project) => (
							<div
								key={project.name}
								className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800"
							>
								<div className="flex-1">
									<div className="mb-1 flex items-center gap-2">
										<span className="font-mono font-bold text-slate-900 dark:text-white">
											{project.name}
										</span>
										<span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700 dark:bg-green-900 dark:text-green-300">
											{project.tag}
										</span>
									</div>
									<p className="text-sm text-slate-500 dark:text-slate-400">{project.desc}</p>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="mb-12 h-px bg-gradient-to-r from-blue-500 via-green-500 to-transparent" />

				<div className="mb-12">
					<h2 className="mb-4 font-mono text-xl font-bold text-slate-900 dark:text-white">
						About This Blog
					</h2>
					<p className="leading-relaxed text-slate-600 dark:text-slate-300">
						This blog acts as my online learning journal where I share everything that I pick up
						through experience. it is my previous and on-going project from any teacher projects or
						copy-pasted tutorial these are my genuine notes as an apprentice actively engaged in web
						development and database designing. To me, the best method to thoroughly understand
						something is by documenting it and that is the very thing I am doing here. If you too
						are learning coding, working on projects, or just browsing through the coding world you
						can find something useful here. thank you for visiting
					</p>
				</div>

				<div className="rounded-2xl border border-green-500/30 bg-green-50/50 p-8 text-center dark:bg-green-900/10">
					<h2 className="mb-2 font-mono text-xl font-bold text-slate-900 dark:text-white">
						Lets Connect
					</h2>
					<p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
						Always happy to connect with fellow developers!
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<a
							href="https://linkedin.com/in/akmal-khairan-rizaldi"
							target="_blank"
							rel="noopener noreferrer"
							className="rounded-lg bg-blue-600 px-5 py-2 font-mono text-sm text-white transition hover:bg-blue-700"
						>
							LinkedIn
						</a>
						<a
							href="https://github.com/FlintHassel"
							target="_blank"
							rel="noopener noreferrer"
							className="rounded-lg bg-slate-800 px-5 py-2 font-mono text-sm text-white transition hover:bg-slate-900"
						>
							GitHub
						</a>
						<a
							href="mailto:akmalcode843@gmail.com"
							className="rounded-lg border border-green-500 px-5 py-2 font-mono text-sm text-green-600 transition hover:bg-green-50 dark:text-green-400 dark:hover:bg-green-900/20"
						>
							Email Me
						</a>
					</div>
				</div>
			</main>
		</>
	);
}
