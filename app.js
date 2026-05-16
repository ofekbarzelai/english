const VOCABULARY = [
  ["Addition", "something extra"],
  ["Change", "important part of something"],
  ["Development", "recent event or process of creating something new"],
  ["Findings", "results"],
  ["Illustration", "picture"],
  ["Feature", "new experience"],
  ["To perform", "to do a job or activity"],
  ["To plant", "to put flowers, trees, etc., in the ground to grow"],
  ["To produce", "to make a movie or TV program"],
  ["To question", "to ask about something"],
  ["To react", "to respond"],
  ["To study", "to look at, learn"],
  ["Financial", "having to do with money"],
  ["Initial", "beginning"],
  ["Limited", "small amount in number"],
  ["Occasional", "not happening or done often"],
  ["Official", "approved by the government"],
  ["Popular", "liked or enjoyed by many people"],
  ["To vary", "to change"],
  ["To claim", "to say or state something is true although you cannot prove it"],
  ["To transport", "to move people, animals or things"],
  ["To appear", "to seem"],
  ["To concern", "to worry"],
  ["To decrease", "to become fewer, less"],
  ["Enjoyment", "pleasure"],
  ["Pollution", "damage caused to water, air or land"],
  ["Profession", "job"],
  ["Destruction", "act of destroying something"],
  ["Demonstration", "event where people show they support or disagree with something or someone"],
  ["Population", "all the people living in an area, country or place"],
  ["Common", "shared by two or more people, things or groups"],
  ["Complicated", "difficult to understand or deal with"],
  ["Delayed", "late"],
  ["Enjoyable", "fun"],
  ["Frequent", "happening often"],
  ["Fresh", "newly made or grown"],
  ["Low", "referring to a small amount or level"],
  ["Nevertheless", "however"],
  ["Seldom", "not often"],
  ["Relevant", "important, connected to something you are doing"],
  ["Rural", "connected to the countryside and not town or city"],
  ["Skilled", "talented, good at something"],
  ["Average", "usual, ordinary"],
  ["Current", "of the present time"],
  ["Ideal", "perfect"],
  ["Little", "not very important or serious"],
  ["Proposed", "suggested as a possible plan or action"],
  ["Probable", "may happen, likely to be true"],
  ["Purpose", "aim"],
  ["Region", "area"],
  ["Sense", "reason, good judgment"],
  ["Quality", "how good or bad something is"],
  ["Volume", "amount"],
  ["Structure", "building"],
  ["Interest", "activity you enjoy doing"],
  ["Flood", "a lot of water that covers an area, usually caused by rain or snow"],
  ["Figure", "body shape"],
  ["Measure", "method for finding the size or amount of something"],
  ["Priority", "main concern, something that must be dealt with first before other things"],
  ["Instruction", "information about how to do something"],
  ["Deliberately", "with intention"],
  ["Essentially", "very important, relating to the most important ideas"],
  ["Hopefully", "what you would like to happen"],
  ["Necessarily", "in all cases, as an unexpected result"],
  ["Personally", "one's own opinion"],
  ["Unfortunately", "sadly"],
  ["Considerable", "large, great"],
  ["Efficient", "do something in an organized way"],
  ["Extraordinary", "very unusual, special or strange"],
  ["Flexible", "can be changed easily"],
  ["Past", "before now"],
  ["Public", "for the use of people in general"],
  ["Intelligence", "ability to learn, understand and think"],
  ["Guidance", "help and advice about how to do something"],
  ["Wildlife", "animals and plants living in their own environment"],
  ["Feedback", "comment or opinion about something such as a new product"],
  ["Objective", "aim, purpose"],
  ["Risk", "possibility of danger"],
  ["Knowledge", "know or have understanding or information about a subject"],
  ["Focus", "center of interest or attention"],
  ["Universe", "everything that exists in space"],
  ["Review", "written opinion"],
  ["Characteristic", "something you easily recognize about a person or thing"],
  ["Advance", "progress"],
  ["To prevent", "to stop from happening"],
  ["To participate", "to join an activity"],
  ["To recommend", "to suggest someone or something would be good for a job or other purpose"],
  ["To recycle", "to use materials such as glass, paper or plastic again"],
  ["To request", "to ask for something"],
  ["To challenge", "to invite someone to take part in a game or argument"],
  ["Change", "difference"],
  ["Criticism", "a negative opinion given about something or someone"],
  ["Designer", "person who draws and plans something new"],
  ["Participant", "person who takes part in an activity"],
  ["Relevance", "importance"],
  ["Variation", "unusual or new experience"],
  ["Deliberate", "planned"],
  ["Developing", "growing and improving"],
  ["Efficiently", "working in a quick and effective way"],
  ["Hopeful", "positive"],
  ["Intelligent", "clever"],
  ["Professional", "trained and skilled"],
  ["Chance", "possibility"],
  ["Conditions", "requirements"],
  ["Drop", "fall to a smaller amount or level"],
  ["Emphasis", "extra attention"],
  ["Existence", "the state of being real or of being known"],
  ["Prevention", "act of stopping something from happening"],
  ["In terms of", "in relation to a particular subject"],
  ["Just about", "almost, nearly"],
  ["Not at all", "in no way"],
  ["On the one hand", "the first thing to consider"],
  ["Out of date", "old, not in fashion"],
  ["Run out of", "finish the supply of something"],
  ["Planet", "large object in space that moves around the sun or star"],
  ["Question", "problem or a difficulty to be dealt with or considered"],
  ["Sense", "feeling"],
  ["Recommendation", "suggestion that something is good or suitable"],
  ["Revision", "doing something over in order to improve it"],
  ["Significance", "importance"],
  ["Private", "paid by a person or company and not the government"],
  ["Psychological", "relating to the mind and feelings"],
  ["Resulting", "caused by an event or situation"],
  ["Skillful", "controlled, good at doing something"],
  ["Regular", "normal"],
  ["Educated", "having studied a lot at school or college"],
  ["More or less", "mostly"],
  ["Look at something", "examine a subject in order to make a decision"],
  ["Not only", "something more than"],
  ["In the meantime", "until something happens"],
  ["Even if", "whether or not"],
  ["In connection with", "related to"],
  ["To specialize", "to become an expert in a subject or skill"],
  ["To revise", "to change a piece of writing, etc. in order to improve it"],
  ["To research", "to study in detail in order to find new information"],
  ["To criticize", "to say something is bad or not good"],
  ["To exist", "to be"],
  ["Must", "to show that something is very likely or certain to be true"],
  ["To characterize", "to describe something by talking about its main qualities"],
  ["To mean", "to intend or to have a purpose"],
  ["To invest", "to put money, time, effort, etc., into something"],
  ["To introduce", "to put something into use for the first time"],
  ["To misunderstand", "to think you have understood something when you have not"],
  ["To finance", "to give money for something"],
  ["In actual fact", "really"],
  ["Among other things", "in addition to"],
  ["Kind of", "almost like"],
  ["Even though", "despite the fact that"],
  ["On the one hand", "the first thing to consider"],
  ["Out of date", "old, not in fashion, old-fashioned"],
  ["At least", "used to show something is good in a bad situation"],
  ["On average", "usually"],
  ["Come after", "following"],
  ["Except that", "apart from the fact that"],
  ["In that case", "if that is the situation"],
  ["Kind of", "type of, sort"],
  ["Viewer", "someone who is watching TV, a movie, or video clip"],
  ["Unity", "joined together, agreement between"],
  ["Reaction", "feeling or action as a result of something"],
  ["Psychologist", "person who studies human feelings and behavior"],
  ["Focus", "main point"],
  ["Investigator", "person whose job is to examine a crime"],
  ["Rely on", "depend on, trust"],
  ["Set up", "arrange, begin"],
  ["Throw away", "get rid of"],
  ["Keep on (doing)", "continue with"],
  ["Cope with", "deal with"],
  ["Concerned with", "be about a particular subject"],
  ["Figure out", "understand or solve"],
  ["Interested in", "curious about something"],
  ["Thanks to", "with the help of, because of"],
  ["Take advantage of", "use an opportunity to"],
  ["Be responsible for", "have control over someone or something"],
  ["Set out", "start a journey"],
  ["Personally", "in my opinion"],
  ["Likely", "expected"],
  ["Still", "despite"],
  ["Once", "as soon as"],
  ["Others", "people in general"],
  ["Naturally", "normally, as expected"],
  ["Unlike", "different"],
  ["Within", "inside, before the end of"],
  ["Before", "earlier"],
  ["From", "showing a starting point"],
  ["In", "experiencing a situation or feeling an emotion"],
  ["Besides", "in addition"],
  ["To generate", "to create, produce"],
  ["To conduct", "to carry out"],
  ["To cope", "to manage"],
  ["To educate", "to teach someone"],
  ["To frighten", "to make someone afraid or scared"],
  ["To investigate", "to check"],
  ["Landscape", "large area of land"],
  ["Material", "papers, information"],
  ["Nature", "character, type"],
  ["Notice", "warning about something that is going to happen"],
  ["Policy", "plan of action"],
  ["Questionnaire", "list of questions people are asked in order to collect information"],
  ["To doubt", "to feel uncertain about something"],
  ["To demonstrate", "to show publicly that you are for or against something"],
  ["To illustrate", "to draw"],
  ["To gain", "to increase in weight, amount or time, etc."],
  ["To approach", "to deal with"],
  ["To exist", "to live"],
  ["Flu", "fever and headache"],
  ["Image", "picture"],
  ["Protest", "event where people complain about something"],
  ["Researcher", "person who discovers information and / or studies it"],
  ["Salary", "money paid for work"],
  ["Sample", "example"]
].map(([word, definition], index) => ({ id: `w${index}`, word, definition }));

const SUPABASE_CONFIG = window.ENGLISH_SPRINT_SUPABASE || {};
const SUPABASE_URL = SUPABASE_CONFIG.url || "";
const SUPABASE_ANON_KEY = SUPABASE_CONFIG.anonKey || SUPABASE_CONFIG.publishableKey || "";

let database = null;

const state = {
  authMode: "login",
  user: null,
  quizMode: null,
  sessionQueue: [],
  currentIndex: 0,
  currentCard: null,
  locked: false,
  finished: false
};

const els = {
  authView: document.querySelector("#auth-view"),
  dashboardView: document.querySelector("#dashboard-view"),
  authForm: document.querySelector("#auth-form"),
  authSubmit: document.querySelector("#auth-submit"),
  authMessage: document.querySelector("#auth-message"),
  username: document.querySelector("#username"),
  password: document.querySelector("#password"),
  currentUser: document.querySelector("#current-user"),
  logoutButton: document.querySelector("#logout-button"),
  totalCount: document.querySelector("#total-count"),
  masteredCount: document.querySelector("#mastered-count"),
  remainingCount: document.querySelector("#remaining-count"),
  homePanel: document.querySelector("#home-panel"),
  quizPanel: document.querySelector("#quiz-panel"),
  wordsPanel: document.querySelector("#words-panel"),
  quizModeLabel: document.querySelector("#quiz-mode-label"),
  quizQuestion: document.querySelector("#quiz-question"),
  progressBar: document.querySelector("#progress-bar"),
  answerOptions: document.querySelector("#answer-options"),
  feedback: document.querySelector("#feedback"),
  nextButton: document.querySelector("#next-button"),
  backHomeButton: document.querySelector("#back-home-button"),
  backFromWords: document.querySelector("#back-from-words"),
  wordListButton: document.querySelector("#word-list-button"),
  wordsList: document.querySelector("#words-list"),
  resetButton: document.querySelector("#reset-button")
};

function makeEmptyProgress() {
  return {
    mastered: [],
    attempts: 0,
    correct: 0,
    randomAttempts: 0,
    smartAttempts: 0
  };
}

function normalizeName(name) {
  return name.trim().toLowerCase();
}

function normalizeProgress(progress) {
  const emptyProgress = makeEmptyProgress();
  if (!progress || typeof progress !== "object") {
    return emptyProgress;
  }

  return {
    ...emptyProgress,
    ...progress,
    mastered: Array.isArray(progress.mastered) ? progress.mastered : []
  };
}

function isSupabaseConfigured() {
  return SUPABASE_URL.startsWith("https://")
    && SUPABASE_ANON_KEY.length > 20
    && !SUPABASE_URL.includes("PASTE_")
    && !SUPABASE_ANON_KEY.includes("PASTE_");
}

function initSupabase() {
  if (!isSupabaseConfigured()) {
    els.authSubmit.disabled = true;
    els.authMessage.textContent = "צריך להגדיר את Supabase בקובץ supabase-config.js.";
    return false;
  }

  if (!window.supabase || typeof window.supabase.createClient !== "function") {
    els.authSubmit.disabled = true;
    els.authMessage.textContent = "ספריית Supabase לא נטענה. צריך חיבור אינטרנט בטעינת האתר.";
    return false;
  }

  database = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  els.authSubmit.disabled = false;
  return true;
}

function usernameToEmail(username) {
  const bytes = new TextEncoder().encode(username);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  const encoded = btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");

  return `user-${encoded}@english-sprint.app`;
}

function friendlyError(error) {
  const message = error?.message || String(error);
  if (message.includes("Invalid login credentials")) {
    return "שם משתמש או סיסמה לא נכונים.";
  }

  if (message.includes("already registered") || message.includes("User already registered")) {
    return "כבר יש חשבון בשם הזה.";
  }

  if (message.includes("row-level security") || message.includes("profiles")) {
    return "ההתחברות עובדת, אבל צריך להריץ את supabase.sql ב-Supabase.";
  }

  return message;
}

function setAuthMode(mode) {
  state.authMode = mode;
  document.querySelectorAll("[data-auth-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.authMode === mode);
  });
  els.authSubmit.textContent = mode === "login" ? "כניסה" : "יצירת חשבון";
  els.authMessage.textContent = "";
}

function setCurrentUser(authUser, profile) {
  state.user = {
    id: authUser.id,
    username: profile.username,
    displayName: profile.display_name || profile.username,
    progress: normalizeProgress(profile.progress)
  };
  renderDashboard();
}

async function loadUserProfile(authUser, fallbackName = "") {
  const { data, error } = await database
    .from("profiles")
    .select("username, display_name, progress")
    .eq("id", authUser.id)
    .maybeSingle();

  if (error) {
    throw error;
  }

  if (data) {
    setCurrentUser(authUser, data);
    return;
  }

  const displayName = fallbackName || authUser.user_metadata?.display_name || "student";
  const username = authUser.user_metadata?.username || normalizeName(displayName);
  const profile = {
    id: authUser.id,
    username,
    display_name: displayName,
    progress: makeEmptyProgress()
  };

  const { data: createdProfile, error: createError } = await database
    .from("profiles")
    .insert(profile)
    .select("username, display_name, progress")
    .single();

  if (createError) {
    throw createError;
  }

  setCurrentUser(authUser, createdProfile);
}

async function updateStoredUser() {
  const { error } = await database
    .from("profiles")
    .update({
      progress: state.user.progress,
      updated_at: new Date().toISOString()
    })
    .eq("id", state.user.id);

  if (error) {
    throw error;
  }
}

function renderDashboard() {
  els.authView.classList.add("hidden");
  els.dashboardView.classList.remove("hidden");
  els.homePanel.classList.remove("hidden");
  els.quizPanel.classList.add("hidden");
  els.wordsPanel.classList.add("hidden");
  els.currentUser.textContent = state.user.displayName;
  refreshStats();
}

function refreshStats() {
  const mastered = new Set(state.user.progress.mastered);
  els.totalCount.textContent = VOCABULARY.length;
  els.masteredCount.textContent = mastered.size;
  els.remainingCount.textContent = VOCABULARY.length - mastered.size;
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function pickRandomCard() {
  return VOCABULARY[Math.floor(Math.random() * VOCABULARY.length)];
}

function getSmartQueue() {
  const mastered = new Set(state.user.progress.mastered);
  return shuffle(VOCABULARY.filter((card) => !mastered.has(card.id)));
}

function startQuiz(mode) {
  state.quizMode = mode;
  state.currentIndex = 0;
  state.locked = false;
  state.finished = false;
  state.sessionQueue = mode === "smart" ? getSmartQueue() : [];
  els.homePanel.classList.add("hidden");
  els.wordsPanel.classList.add("hidden");
  els.quizPanel.classList.remove("hidden");
  els.quizModeLabel.textContent = mode === "smart" ? "מסלול חכם" : "מיקס מילים";
  showNextQuestion();
}

function showNextQuestion() {
  state.locked = false;
  state.finished = false;
  els.nextButton.disabled = true;
  els.feedback.textContent = "";
  els.feedback.className = "feedback";
  els.answerOptions.innerHTML = "";

  if (state.quizMode === "smart" && state.currentIndex >= state.sessionQueue.length) {
    renderSmartFinish();
    return;
  }

  state.currentCard = state.quizMode === "smart"
    ? state.sessionQueue[state.currentIndex]
    : pickRandomCard();

  els.quizQuestion.textContent = state.currentCard.word;
  renderProgress();
  renderAnswers(state.currentCard);
}

function renderProgress() {
  if (state.quizMode === "random") {
    els.progressBar.style.width = "100%";
    return;
  }

  const total = Math.max(state.sessionQueue.length, 1);
  els.progressBar.style.width = `${Math.round((state.currentIndex / total) * 100)}%`;
}

function renderAnswers(card) {
  const wrongAnswers = shuffle(VOCABULARY.filter((item) => item.id !== card.id))
    .map((item) => item.definition)
    .filter((definition, index, array) => definition !== card.definition && array.indexOf(definition) === index)
    .slice(0, 3);
  const answers = shuffle([card.definition, ...wrongAnswers]);

  answers.forEach((definition) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    button.textContent = definition;
    button.addEventListener("click", () => chooseAnswer(button, definition));
    els.answerOptions.appendChild(button);
  });
}

function chooseAnswer(button, definition) {
  if (state.locked) {
    return;
  }

  state.locked = true;
  const isCorrect = definition === state.currentCard.definition;
  state.user.progress.attempts += 1;
  state.user.progress[state.quizMode === "smart" ? "smartAttempts" : "randomAttempts"] += 1;

  if (isCorrect) {
    state.user.progress.correct += 1;
    button.classList.add("correct");
    els.feedback.textContent = "נכון!";
    els.feedback.classList.add("good");
    if (state.quizMode === "smart") {
      const mastered = new Set(state.user.progress.mastered);
      mastered.add(state.currentCard.id);
      state.user.progress.mastered = [...mastered];
    }
  } else {
    button.classList.add("wrong");
    els.feedback.textContent = `לא נכון. התשובה: ${state.currentCard.definition}`;
    els.feedback.classList.add("bad");
    markCorrectAnswer();
  }

  [...els.answerOptions.children].forEach((answerButton) => {
    answerButton.disabled = true;
  });

  if (state.quizMode === "smart") {
    state.currentIndex += 1;
  }

  updateStoredUser()
    .then(() => {
      refreshStats();
      els.nextButton.disabled = false;
      els.nextButton.textContent = state.quizMode === "smart" && state.currentIndex >= state.sessionQueue.length
        ? "סיום"
        : "שאלה הבאה";
    })
    .catch((error) => {
      els.feedback.textContent = `התשובה נקלטה במסך, אבל לא נשמרה בענן: ${friendlyError(error)}`;
      els.feedback.className = "feedback bad";
    });
}

function markCorrectAnswer() {
  [...els.answerOptions.children].forEach((answerButton) => {
    if (answerButton.textContent === state.currentCard.definition) {
      answerButton.classList.add("correct");
    }
  });
}

function renderSmartFinish() {
  refreshStats();
  state.currentCard = null;
  state.finished = true;
  const remaining = VOCABULARY.length - state.user.progress.mastered.length;
  els.progressBar.style.width = "100%";
  els.quizQuestion.textContent = remaining === 0 ? "סיימת את כל המילים" : "הסיבוב נגמר";
  els.answerOptions.innerHTML = "";
  els.feedback.className = remaining === 0 ? "feedback good" : "feedback bad";
  els.feedback.textContent = remaining === 0
    ? "כל הכבוד, במסלול החכם אין כרגע מילים לחיזוק."
    : `נשארו ${remaining} מילים. בפעם הבאה המסלול יציג רק אותן.`;
  els.nextButton.disabled = remaining === 0;
  els.nextButton.textContent = "המשך חיזוק";
}

function handleNextQuestion() {
  if (state.quizMode === "smart" && state.finished) {
    startQuiz("smart");
    return;
  }

  showNextQuestion();
}

function renderWordsList() {
  els.wordsList.innerHTML = "";
  VOCABULARY.forEach((card) => {
    const row = document.createElement("div");
    row.className = "word-row";
    row.innerHTML = `<b>${escapeHtml(card.word)}</b><span>${escapeHtml(card.definition)}</span>`;
    els.wordsList.appendChild(row);
  });
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function showWords() {
  renderWordsList();
  els.homePanel.classList.add("hidden");
  els.quizPanel.classList.add("hidden");
  els.wordsPanel.classList.remove("hidden");
}

async function resetCurrentAccount() {
  const confirmed = window.confirm("לאפס את כל ההתקדמות של החשבון הזה?");
  if (!confirmed) {
    return;
  }

  state.user.progress = makeEmptyProgress();
  try {
    await updateStoredUser();
    renderDashboard();
  } catch (error) {
    window.alert(`האיפוס לא נשמר בענן: ${friendlyError(error)}`);
  }
}

async function logout() {
  if (database) {
    await database.auth.signOut();
  }

  state.user = null;
  els.dashboardView.classList.add("hidden");
  els.authView.classList.remove("hidden");
  els.password.value = "";
  els.authMessage.textContent = "";
}

async function tryRestoreSession() {
  const { data, error } = await database.auth.getSession();
  if (error || !data.session?.user) {
    return;
  }

  try {
    await loadUserProfile(data.session.user);
  } catch (profileError) {
    els.authMessage.textContent = friendlyError(profileError);
  }
}

async function handleAuthSubmit(event) {
  event.preventDefault();
  const displayName = els.username.value.trim();
  const username = normalizeName(displayName);
  const password = els.password.value;

  if (!database) {
    els.authMessage.textContent = "צריך להגדיר את Supabase לפני הרשמה או התחברות.";
    return;
  }

  if (!username || password.length < 3) {
    els.authMessage.textContent = "צריך שם משתמש וסיסמה של לפחות 3 תווים.";
    return;
  }

  els.authSubmit.disabled = true;
  els.authMessage.textContent = state.authMode === "login" ? "מתחבר..." : "יוצר חשבון...";

  try {
    if (state.authMode === "signup") {
      const { data, error } = await database.auth.signUp({
        email: usernameToEmail(username),
        password,
        options: {
          data: {
            username,
            display_name: displayName
          }
        }
      });

      if (error) {
        throw error;
      }

      if (!data.session) {
        els.authMessage.textContent = "החשבון נוצר, אבל Supabase דורש אישור אימייל. כבה Email Confirmations לפי ההוראות.";
        return;
      }

      await loadUserProfile(data.user, displayName);
      return;
    }

    const { data, error } = await database.auth.signInWithPassword({
      email: usernameToEmail(username),
      password
    });

    if (error) {
      throw error;
    }

    await loadUserProfile(data.user, displayName);
  } catch (error) {
    els.authMessage.textContent = friendlyError(error);
  } finally {
    els.authSubmit.disabled = false;
  }
}

async function initializeApp() {
  setAuthMode("login");
  if (!initSupabase()) {
    return;
  }

  await tryRestoreSession();
}

document.querySelectorAll("[data-auth-mode]").forEach((button) => {
  button.addEventListener("click", () => setAuthMode(button.dataset.authMode));
});

els.authForm.addEventListener("submit", (event) => {
  handleAuthSubmit(event);
});

document.querySelectorAll("[data-start-mode]").forEach((button) => {
  button.addEventListener("click", () => startQuiz(button.dataset.startMode));
});

els.nextButton.addEventListener("click", handleNextQuestion);
els.backHomeButton.addEventListener("click", renderDashboard);
els.backFromWords.addEventListener("click", renderDashboard);
els.wordListButton.addEventListener("click", showWords);
els.resetButton.addEventListener("click", resetCurrentAccount);
els.logoutButton.addEventListener("click", logout);

initializeApp();
