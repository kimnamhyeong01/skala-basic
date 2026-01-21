const drawButton = document.getElementById('drawButton');
const messageDiv = document.getElementById('message');

// async 함수는 자동으로 Promise를 반환함
async function drawLottery() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isWinner = Math.random() < 0.5; // 50% 확률
            isWinner
                ? resolve("당첨 되었습니다.")
                : reject("꽝! 다음 기회에...");
        }, 1000);
    });
}

drawButton.addEventListener('click', async () => {
    messageDiv.textContent = "1초 후에 당첨 결과가 발표됩니다.";
    messageDiv.className = 'message'; // 초기화

    try {
        // Promise가 resolve될 때까지 기다림
        const result = await drawLottery();

        messageDiv.textContent = result;
        messageDiv.classList.add('success'); // 파란색
    } catch (error) {
        // Promise가 reject되면 catch로 이동
        messageDiv.textContent = error;
        messageDiv.classList.add('failure'); // 빨간색
    }
});
