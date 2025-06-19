const data = [
    { "verb": "acknowledge", "correct": "V-ing" },
    { "verb": "admit", "correct": "V-ing" },
    { "verb": "advise", "correct": "V-ing" },
    { "verb": "allow", "correct": "V-ing" }, // also "allow someone to V"
    { "verb": "anticipate", "correct": "V-ing" },
    { "verb": "appreciate", "correct": "V-ing" },
    { "verb": "avoid", "correct": "V-ing" },
    { "verb": "be used to", "correct": "V-ing" },
    { "verb": "can't help", "correct": "V-ing" },
    { "verb": "can't stand", "correct": "V-ing" },
    { "verb": "celebrate", "correct": "V-ing" },
    { "verb": "consider", "correct": "V-ing" },
    { "verb": "contemplate", "correct": "V-ing" },
    { "verb": "continue", "correct": "V-ing" }, // also "continue to V"
    { "verb": "defend", "correct": "V-ing" },
    { "verb": "delay", "correct": "V-ing" },
    { "verb": "deny", "correct": "V-ing" },
    { "verb": "detest", "correct": "V-ing" },
    { "verb": "discontinue", "correct": "V-ing" },
    { "verb": "discuss", "correct": "V-ing" },
    { "verb": "dislike", "correct": "V-ing" },
    { "verb": "dread", "correct": "V-ing" },
    { "verb": "endure", "correct": "V-ing" },
    { "verb": "enjoy", "correct": "V-ing" },
    { "verb": "escape", "correct": "V-ing" },
    { "verb": "evade", "correct": "V-ing" },
    { "verb": "fancy", "correct": "V-ing" }, // British English: to want to do something
    { "verb": "feel like", "correct": "V-ing" },
    { "verb": "finish", "correct": "V-ing" },
    { "verb": "forgive", "correct": "V-ing" },
    { "verb": "give up", "correct": "V-ing" }, // Phrasal verb
    { "verb": "imagine", "correct": "V-ing" },
    { "verb": "involve", "correct": "V-ing" },
    { "verb": "keep", "correct": "V-ing" },
    { "verb": "loathe", "correct": "V-ing" },
    { "verb": "mention", "correct": "V-ing" },
    { "verb": "mind", "correct": "V-ing" },
    { "verb": "miss", "correct": "V-ing" },
    { "verb": "permit", "correct": "V-ing" }, // Also "permit someone to V"
    { "verb": "postpone", "correct": "V-ing" },
    { "verb": "practice", "correct": "V-ing" },
    { "verb": "prevent", "correct": "V-ing" },
    { "verb": "prohibit", "correct": "V-ing" },
    { "verb": "propose", "correct": "V-ing" }, // As in "suggest"; also "propose to V" (intend to)
    { "verb": "put off", "correct": "V-ing" }, // Phrasal verb
    { "verb": "recall", "correct": "V-ing" },
    { "verb": "recollect", "correct": "V-ing" },
    { "verb": "recommend", "correct": "V-ing" },
    { "verb": "report", "correct": "V-ing" },
    { "verb": "resent", "correct": "V-ing" },
    { "verb": "resist", "correct": "V-ing" },
    { "verb": "resume", "correct": "V-ing" },
    { "verb": "risk", "correct": "V-ing" },
    { "verb": "save", "correct": "V-ing" }, // As in "avoid"
    { "verb": "suggest", "correct": "V-ing" },
    { "verb": "stop", "correct": "V-ing" }, // To cease an activity
    { "verb": "succeed in", "correct": "V-ing" }, // Phrasal verb
    { "verb": "support", "correct": "V-ing" },
    { "verb": "tolerate", "correct": "V-ing" },
    { "verb": "understand", "correct": "V-ing" },
    { "verb": "urge", "correct": "V-ing" },
    { "verb": "worry about", "correct": "V-ing" }, // Phrasal verb

    // --- Verbs followed by to V ---
    { "verb": "afford", "correct": "to V" },
    { "verb": "agree", "correct": "to V" },
    { "verb": "aim", "correct": "to V" },
    { "verb": "appear", "correct": "to V" },
    { "verb": "arrange", "correct": "to V" },
    { "verb": "ask", "correct": "to V" },
    { "verb": "attempt", "correct": "to V" },
    { "verb": "beg", "correct": "to V" },
    { "verb": "bother", "correct": "to V" },
    { "verb": "care", "correct": "to V" },
    { "verb": "choose", "correct": "to V" },
    { "verb": "claim", "correct": "to V" },
    { "verb": "come", "correct": "to V" },
    { "verb": "consent", "correct": "to V" },
    { "verb": "dare", "correct": "to V" }, // Can also be 'Vo' in some contexts, especially with modals (e.g., "How dare he say that?")
    { "verb": "decide", "correct": "to V" },
    { "verb": "decline", "correct": "to V" },
    { "verb": "demand", "correct": "to V" },
    { "verb": "deserve", "correct": "to V" },
    { "verb": "endeavor", "correct": "to V" },
    { "verb": "expect", "correct": "to V" },
    { "verb": "fail", "correct": "to V" },
    { "verb": "guarantee", "correct": "to V" },
    { "verb": "happen", "correct": "to V" },
    { "verb": "hesitate", "correct": "to V" },
    { "verb": "hope", "correct": "to V" },
    { "verb": "intend", "correct": "to V" },
    { "verb": "learn", "correct": "to V" },
    { "verb": "long", "correct": "to V" },
    { "verb": "manage", "correct": "to V" },
    { "verb": "mean", "correct": "to V" }, // (as in "intend to")
    { "verb": "neglect", "correct": "to V" },
    { "verb": "need", "correct": "to V" },
    { "verb": "offer", "correct": "to V" },
    { "verb": "omit", "correct": "to V" },
    { "verb": "ought", "correct": "to V" },
    { "verb": "plan", "correct": "to V" },
    { "verb": "prepare", "correct": "to V" },
    { "verb": "pretend", "correct": "to V" },
    { "verb": "promise", "correct": "to V" },
    { "verb": "prove", "correct": "to V" }, // (as in "prove to be")
    { "verb": "refuse", "correct": "to V" },
    { "verb": "request", "correct": "to V" },
    { "verb": "resolve", "correct": "to V" },
    { "verb": "seem", "correct": "to V" },
    { "verb": "strive", "correct": "to V" },
    { "verb": "struggle", "correct": "to V" },
    { "verb": "swear", "correct": "to V" },
    { "verb": "tend", "correct": "to V" },
    { "verb": "threaten", "correct": "to V" },
    { "verb": "undertake", "correct": "to V" },
    { "verb": "volunteer", "correct": "to V" },
    { "verb": "wait", "correct": "to V" },
    { "verb": "want", "correct": "to V" },
    { "verb": "wish", "correct": "to V" },
    { "verb": "yearn", "correct": "to V" },
    { "verb": "agree", "correct": "to V" }, // Duplicated in your initial list, but keeping it for completeness if you're merging

    // --- Verbs followed by Vo (bare infinitive) ---
    { verb: "let", correct: "Vo" }, // let someone do something
    { verb: "make", correct: "Vo" }, // make someone do something
    { verb: "have", correct: "Vo" }, // have someone do something (causative)
    { verb: "see", correct: "Vo" }, // see someone do something (observe a complete action) - also V-ing for ongoing action
    { verb: "hear", correct: "Vo" }, // hear someone do something (observe a complete action) - also V-ing for ongoing action
    { verb: "feel", correct: "Vo" }, // feel someone do something (observe a complete action) - also V-ing for ongoing action
    { verb: "watch", correct: "Vo" }, // watch someone do something (observe a complete action) - also V-ing for ongoing action
    { verb: "notice", correct: "Vo" }, // notice someone do something (observe a complete action) - also V-ing for ongoing action
    { verb: "bid", correct: "Vo" }, // bid someone do something (formal)
    { verb: "help", correct: "Vo" }, // help someone do something (can also be 'to V')

    // --- Verbs that can be followed by both V-ing and to V (with different meanings) ---
    // Bạn có thể cân nhắc thêm các trường hợp này nhưng cần xử lý logic riêng nếu muốn kiểm tra nghĩa.
    // Ví dụ:
    // { verb: "remember", correct: "V-ing" }, // remember doing (past memory)
    // { verb: "remember", correct: "to V" }, // remember to do (future intention)
    // { verb: "forget", correct: "V-ing" }, // forget doing (past memory)
    // { verb: "forget", correct: "to V" }, // forget to do (future intention)
    // { verb: "stop", correct: "V-ing" }, // stop doing (cease an activity)
    // { verb: "stop", correct: "to V" }, // stop to do (stop one thing to do another)
    // { verb: "regret", correct: "V-ing" }, // regret doing (past action)
    // { verb: "regret", correct: "to V" }, // regret to inform (used to announce bad news)
    // { verb: "try", correct: "V-ing" }, // try doing (experiment)
    // { verb: "try", correct: "to V" }, // try to do (make an effort)
    // { verb: "need", correct: "V-ing" }, // need doing (passive meaning, the object needs the action) e.g., "The car needs washing."
    // { verb: "need", correct: "to V" }, // need to do (active meaning) e.g., "I need to wash the car."

    // --- Verbs followed by Object + to V ---
    // Các động từ này đi với tân ngữ rồi mới đến "to V". Bạn có thể cần một loại câu hỏi khác cho chúng.
    // Ví dụ: advise, allow, ask, cause, enable, encourage, expect, forbid, force, hire, instruct, invite, order, persuade, remind, teach, tell, urge, warn, want, wish
    // { verb: "advise", correct: "O + to V" }, // advise someone to do something
    // { verb: "allow", correct: "O + to V" }, // allow someone to do something
];
let current = 0;
let selected = null;
// Example: data = [{ verb: "enjoy", correct: "V-ing" }, { verb: "want", correct: "to V" }];
let currentQuestionIndex = 0; // Sử dụng chỉ mục của câu hỏi trong mảng đã xáo trộn
let shuffledDataIndices = []; // Mảng chứa các chỉ mục đã xáo trộn của data

// Hàm xáo trộn mảng (Fisher-Yates shuffle algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Hoán đổi phần tử
    }
}

function initializeQuiz() {
    // Khởi tạo mảng chỉ mục từ 0 đến data.length - 1
    shuffledDataIndices = Array.from({ length: data.length }, (_, i) => i);
    shuffleArray(shuffledDataIndices); // Xáo trộn các chỉ mục

    // Đặt lại chỉ mục câu hỏi hiện tại về 0 sau khi xáo trộn
    currentQuestionIndex = 0;
    loadQuestion();
}

function loadQuestion() {
    if (data.length === 0) {
        document.getElementById('mainVerb').textContent = 'Đang tải dữ liệu...';
        return;
    }

    // Lấy chỉ mục thực tế của câu hỏi từ mảng đã xáo trộn
    const actualDataIndex = shuffledDataIndices[currentQuestionIndex];
    const item = data[actualDataIndex];

    document.getElementById('mainVerb').textContent = item.verb;
    document.getElementById('result').textContent = '';
    selected = null;
    document.querySelectorAll('#options button').forEach(btn => {
        btn.classList.remove('selected', 'correct', 'incorrect');
        btn.disabled = false;
    });
}

function selectOption(button) {
    selected = button.textContent;

    const actualDataIndex = shuffledDataIndices[currentQuestionIndex]; // LẤY INDEX ĐÚNG
    const item = data[actualDataIndex];
    const correct = item.correct;

    document.querySelectorAll('#options button').forEach(btn => {
        btn.classList.remove('selected', 'correct', 'incorrect');
        btn.disabled = true;
    });

    button.classList.add('selected');

    if (selected === correct) {
        document.getElementById('result').textContent = '✅ Đúng rồi!';
        button.classList.add('correct');
    } else {
        document.getElementById('result').textContent = `❌ Sai. Đáp án đúng là: ${correct}`;
        button.classList.add('incorrect');
        document.querySelectorAll('#options button').forEach(btn => {
            if (btn.textContent === correct) {
                btn.classList.add('correct');
            }
        });
    }
}



function nextQuestion() {
    currentQuestionIndex = (currentQuestionIndex + 1) % shuffledDataIndices.length;
    loadQuestion();
}

// Thay đổi window.onload để gọi hàm khởi tạo mới
window.onload = initializeQuiz;
