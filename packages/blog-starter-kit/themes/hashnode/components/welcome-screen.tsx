import { useEffect, useState } from 'react';

export default function WelcomeScreen() {
	const [visible, setVisible] = useState(false);
	const [fadeOut, setFadeOut] = useState(false);

	useEffect(() => {
		const hasVisited = sessionStorage.getItem('hasVisited');
		if (!hasVisited) {
			setVisible(true);
			sessionStorage.setItem('hasVisited', 'true');
			setTimeout(() => setFadeOut(true), 2500);
			setTimeout(() => setVisible(false), 3200);
		}
	}, []);

	if (!visible) return null;

	return (
		<div
			style={{
				position: 'fixed',
				inset: 0,
				zIndex: 9999,
				background: '#030712',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				transition: 'opacity 0.7s ease',
				opacity: fadeOut ? 0 : 1,
			}}
		>
			<div style={{ textAlign: 'center' }}>
				<div
					style={{
						fontFamily: 'monospace',
						fontSize: 13,
						letterSpacing: 6,
						color: '#cffff7',
						marginBottom: 16,
						textTransform: 'uppercase',
					}}
				>
					Welcome to
				</div>
				<h1
					style={{
						fontFamily: 'monospace',
						fontSize: 48,
						fontWeight: 'bold',
						color: '#ffffff',
						margin: 0,
						letterSpacing: 2,
					}}
				>
					Akmal-Khairan-Rizaldi<span style={{ color: '#00C9A7' }}>Blog</span>
				</h1>
				<div
					style={{
						fontFamily: 'monospace',
						fontSize: 13,
						color: '#343f4f',
						marginTop: 16,
						letterSpacing: 3,
					}}
				>
					Web Dev & Coding
				</div>
			</div>

			<style>{`
        @keyframes loadbar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
		</div>
	);
}
