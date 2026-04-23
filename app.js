function enroll() {
  document.getElementById("enroll").scrollIntoView({
    behavior: "smooth"
  });
}


// mobile nav

function toggleMenu() {
  document.querySelector("nav ul").classList.toggle("show");
}


// / form submission 



document.getElementById("enrollForm").addEventListener("submit", function(event) {
    event.preventDefault();

    alert("🎉 You’re in! Welcome to Social Media Academy. Get ready to start growing your brand!");

    this.reset();
});


// modules


// FAQ CHATBOX


const chatBox = document.getElementById("chatBox");
const input = document.getElementById("userInput");

// “knowledge base” (your AI brain)
const responses = [
    {
        keywords: ["course", "how long", "duration"],
        answer: "You can complete the course in 8 days or less."
    },
    {
        keywords: ["price", "cost", "pricing"],
        answer: "We offer flexible payment options starting from $62 per lesson."
    },
    {
        keywords: ["help", "grow", "social media"],
        answer: "This course teaches you how to grow your business using social media without hiring an expert."
    },
    {
        keywords: ["hello", "hi"],
        answer: "Hey! Ask me anything about the course 😊"
    },
     {
        keywords: ["why take this course", "hire someone", "social media manager"],
        answer: "While hiring someone can cost a fortune, especially for small businesses, managing social media is not as complicated as it may seem. This course will show you exactly how to do it yourself with confidence and strategy."
    },

    {
        keywords: ["manager", "train", "employee", "team"],
        answer: "Absolutely! This course is perfect for training anyone who manages a business’s social media. It’s a great way to build consistency and skill across your team."
    },

    {
        keywords: ["price", "cost", "how much"],
        answer: "We offer three flexible payment options: PayPal finance, pay-as-you-go per module, or a one-time payment of $365."
    },

    {
        keywords: ["viral", "go viral", "views", "reach"],
        answer: "Yes — but not in a gimmicky way. You’ll learn how to create content that naturally increases reach, boosts engagement, and improves your chances of going viral through smart strategy and timing."
    },

    {
        keywords: ["how long", "duration", "finish", "time"],
        answer: "You can complete the course in about a week. We recommend one module per day, but it’s flexible. Each module is short (around 20 minutes), so some students finish even faster."
    },
    {
    keywords: ["will this work", "does it work", "is this real", "are you sure"],
    answer: "Yes — if you follow the steps and stay consistent, this system is designed to work. You’ll learn exactly what to post and how to grow with strategy, not guessing."
},
{
    keywords: ["what if it doesnt", "what if it doesn't work", "fail", "doesnt work"],
    answer: "That’s a fair question — but the course is built to remove guesswork. Most people struggle because they don’t have structure. This gives you a clear step-by-step system to follow."
},
{
    keywords: ["is it worth it", "worth it"],
    answer: "Yes — because instead of paying someone monthly, you’re learning how to do it yourself long-term, which saves money and gives you full control."
},
{
    keywords: ["confused", "not sure", "dont know", "should i"],
    answer: "That’s totally okay — most people start there. This course is designed to guide you step by step so you’re never guessing what to do next."
},
{
    keywords: ["name", "who are you", "", ""],
    answer: "Social Media Academy & we are here to help small business owners!"
}
];

function sendMessage() {
    const text = input.value.trim();
    if (text === "") return;

    // user message
    addMessage(text, "user");

    // bot reply
    const reply = getResponse(text.toLowerCase());
    addMessage(reply, "bot");

    input.value = "";
}

function addMessage(text, type) {
    const msg = document.createElement("div");
    msg.classList.add("message", type);
    msg.textContent = text;
    chatBox.appendChild(msg);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function getResponse(inputText) {
    for (let item of responses) {
        for (let keyword of item.keywords) {
            if (inputText.includes(keyword)) {
                return item.answer;
            }
        }
    }
    return "Hmm 🤔 I’m not sure about that — try asking about pricing, duration, or what the course includes.";
}


// CHAT BOX WINDOW

window.addEventListener("load", () => {
    const chatBox = document.getElementById("chatBox");

    const messages = [
        "👋 Hey! Welcome to Social Media Academy.",
        "I’m your course assistant — Ask me anything below when you're ready!"
    ];

    let i = 0;

    function addMessage() {
        if (i >= messages.length) return;

        const msg = document.createElement("div");
        msg.classList.add("message", "bot");
        msg.textContent = messages[i];

        chatBox.appendChild(msg);

        // auto-scroll to bottom
        chatBox.scrollTop = chatBox.scrollHeight;

        i++;

        setTimeout(addMessage, 1000); // delay between messages
    }

    addMessage();
});

// ENTER SUBMIT MESSAGE

document.getElementById("userInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // stops form refresh if inside a form
        sendMessage();
    }
});





// new page tryout 
// User fills form
// Their name is saved
// They get redirected
// New page says: “Welcome, [Name]!”
// Page is hidden + protected

const btn = document.getElementById("submitBtn");

if (btn) {
    btn.addEventListener("click", function (event) {
        event.preventDefault(); // IMPORTANT so form doesn't reload

        const fullName = document.getElementById("fullName").value;
        const userName = document.getElementById("userName").value;

        localStorage.setItem("studentName", fullName || userName);
        localStorage.setItem("accessGranted", "true");

        window.location.href = "module1.html";
    });
}

const name = localStorage.getItem("studentName");

if (name) {
    document.getElementById("welcome").textContent =
        `Welcome, ${name}! 👋`;
}