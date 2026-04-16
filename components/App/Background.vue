<template>
    <div class="fixed inset-0 -z-10 min-w-screen min-h-screen overflow-hidden">
        <!-- Gradient orbs -->
        <div class="orb orb-1" style="background: radial-gradient(circle, rgba(16,185,129,0.4) 0%, transparent 70%)"></div>
        <div class="orb orb-2" style="background: radial-gradient(circle, rgba(20,184,166,0.35) 0%, transparent 70%)"></div>
        <div class="orb orb-3" style="background: radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)"></div>

        <!-- Geometric shapes -->
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
        <div class="shape shape-5"></div>
    </div>
</template>

<style scoped>
/* Orbs */
.orb {
    position: absolute;
    border-radius: 9999px;
    filter: blur(120px);
    opacity: 0.15;
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

/* Geometric shapes — rounded to match site's rounded-2xl (16px) standard */
.shape {
    position: absolute;
    border: 1px solid rgba(16, 185, 129, 0.15);
    border-radius: 16px;
    opacity: 0.6;
}

.shape-1 {
    width: 200px;
    height: 200px;
    top: 10%;
    left: -60px;
    animation: drift-1 30s linear infinite;
}

.shape-2 {
    width: 300px;
    height: 300px;
    bottom: 5%;
    right: -80px;
    animation: drift-2 35s linear infinite;
}

.shape-3 {
    width: 150px;
    height: 150px;
    top: 55%;
    left: 15%;
    animation: drift-3 25s linear infinite;
}

.shape-4 {
    width: 100px;
    height: 100px;
    top: 25%;
    right: 20%;
    animation: drift-4 28s linear infinite;
}

.shape-5 {
    width: 250px;
    height: 250px;
    bottom: 30%;
    left: 50%;
    animation: drift-5 32s linear infinite;
}

/* Orb keyframes */
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

/* Shape keyframes — continuous rotation + drift */
@keyframes drift-1 {
    0% { transform: rotate(15deg) translate(0, 0); }
    25% { transform: rotate(105deg) translate(40px, -30px); }
    50% { transform: rotate(195deg) translate(-20px, 50px); }
    75% { transform: rotate(285deg) translate(30px, 20px); }
    100% { transform: rotate(375deg) translate(0, 0); }
}

@keyframes drift-2 {
    0% { transform: rotate(-12deg) translate(0, 0); }
    25% { transform: rotate(-102deg) translate(-50px, 30px); }
    50% { transform: rotate(-192deg) translate(30px, -40px); }
    75% { transform: rotate(-282deg) translate(-20px, -20px); }
    100% { transform: rotate(-372deg) translate(0, 0); }
}

@keyframes drift-3 {
    0% { transform: rotate(45deg) translate(0, 0); }
    25% { transform: rotate(135deg) translate(30px, 40px); }
    50% { transform: rotate(225deg) translate(-40px, 20px); }
    75% { transform: rotate(315deg) translate(20px, -30px); }
    100% { transform: rotate(405deg) translate(0, 0); }
}

@keyframes drift-4 {
    0% { transform: rotate(30deg) translate(0, 0); }
    25% { transform: rotate(-60deg) translate(-30px, -40px); }
    50% { transform: rotate(-150deg) translate(20px, 30px); }
    75% { transform: rotate(-240deg) translate(-10px, -20px); }
    100% { transform: rotate(-330deg) translate(0, 0); }
}

@keyframes drift-5 {
    0% { transform: rotate(-20deg) translate(0, 0); }
    25% { transform: rotate(70deg) translate(40px, -20px); }
    50% { transform: rotate(160deg) translate(-30px, -40px); }
    75% { transform: rotate(250deg) translate(20px, 30px); }
    100% { transform: rotate(340deg) translate(0, 0); }
}
</style>
