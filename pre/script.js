document.addEventListener('DOMContentLoaded', function () {
    const quizForm = document.getElementById('quizForm');

    quizForm.addEventListener('submit', function (e) {
        e.preventDefault();
        calculateScore();
    });
});

function calculateScore() {
    const questions = document.querySelectorAll('.question');
    let score = 0;

    questions.forEach(function (question, index) {
        const selectedOption = question.querySelector('input[type="radio"]:checked');

        if (selectedOption) {
            const userAnswer = selectedOption.value;

            // Ganti dengan logika penilaian sesuai jawaban yang benar
            // Di sini, saya asumsikan jawaban yang benar adalah 'a' untuk setiap pertanyaan
            const correctAnswer = 'a';

            if (userAnswer === correctAnswer) {
                score++;
            }
        }
    });

    // Navigasi ke halaman hasil dengan parameter skor
    window.location.href = `result.html?score=${score}`;
}
