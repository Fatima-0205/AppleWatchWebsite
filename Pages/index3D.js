import { Application } from 'https://unpkg.com/@splinetool/runtime';

window.addEventListener('DOMContentLoaded', async() => {
    const canvas = document.getElementById('spline-canvas');
    const app = new Application(canvas);
    await app.load('https://prod.spline.design/TxxKiewNLDGT1N0z/scene.splinecode');

    app.renderer.setClearColor(0xffffff, 1);

    const watch = app.findObjectByName('Watch Group');
    let currentRotation = 0;

    window.addEventListener('scroll', () => {
        if (!watch) return;

        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollRatio = window.scrollY / maxScroll;

        let targetRotation = 0;

        if (scrollRatio < 0.25) {
            targetRotation = 0;
        } else if (scrollRatio < 0.4) {
            targetRotation = (Math.PI / 2) * ((scrollRatio - 0.25) / 0.15);
        } else if (scrollRatio < 0.55) {
            targetRotation = Math.PI / 2;
        } else if (scrollRatio < 0.7) {
            targetRotation = (Math.PI / 2) + ((-Math.PI - Math.PI) / 2) * ((scrollRatio - 0.55) / 0.15);
            const from = Math.PI / 2;
            const to = -Math.PI / 2;
            targetRotation = from + (to - from) * ((scrollRatio - 0.55) / 0.15);
        } else if (scrollRatio < 0.85) {
            targetRotation = -Math.PI / 2;
        } else if (scrollRatio < 1) {
            const from = -Math.PI / 2;
            const to = 0;
            targetRotation = from + (to - from) * ((scrollRatio - 0.85) / 0.15);
        }

        currentRotation += (targetRotation - currentRotation) * 0.15;

        watch.rotation.x = 0;
        watch.rotation.y = 0;
        watch.rotation.z = currentRotation;
        watch.scale.set(1, 1, 1);
        watch.position.x = 0;
        watch.position.y = scrollRatio >= 0.6 ? -((scrollRatio - 0.6) * 20) : 0;
        watch.position.z = 0;
    });
});