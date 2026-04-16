<template>
    <div class="fixed inset-0 -z-10 min-w-screen min-h-screen overflow-hidden opacity-20">
        <div class="orb orb-1" style="background: radial-gradient(circle, rgba(16,185,129,0.4) 0%, transparent 70%)"></div>
        <div class="orb orb-2" style="background: radial-gradient(circle, rgba(20,184,166,0.35) 0%, transparent 70%)"></div>
        <div class="orb orb-3" style="background: radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)"></div>
    </div>
</template>

<style scoped>
.orb {
    position: absolute;
    border-radius: 9999px;
    filter: blur(120px);
}

.orb-1 {
    width: 600px;
    height: 600px;
    bottom: -100px;
    left: -150px;
    animation: float-1 20s ease-in-out infinite alternate;
}

.orb-2 {
    width: 500px;
    height: 500px;
    top: -100px;
    right: -100px;
    animation: float-2 25s ease-in-out infinite alternate;
    animation-delay: -5s;
}

.orb-3 {
    width: 400px;
    height: 400px;
    top: 40%;
    left: 30%;
    animation: float-3 22s ease-in-out infinite alternate;
    animation-delay: -10s;
}

@keyframes float-1 {
    0% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(80px, -60px) scale(1.1); }
    100% { transform: translate(-40px, 40px) scale(0.95); }
}

@keyframes float-2 {
    0% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(-60px, 80px) scale(1.05); }
    100% { transform: translate(50px, -30px) scale(1); }
}

@keyframes float-3 {
    0% { transform: translate(0, 0) scale(1.05); }
    50% { transform: translate(40px, 50px) scale(0.95); }
    100% { transform: translate(-70px, -40px) scale(1.1); }
}
</style>
