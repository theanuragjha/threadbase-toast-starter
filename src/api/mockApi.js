// Fake API for this lesson - no backend needed.
// These functions return Promises that resolve or REJECT after a short delay,
// shaped exactly like Axios responses and errors. That means your mutation's
// onSuccess and onError callbacks behave just like they would against a real server.

// A title that already "exists" so you can trigger the duplicate-title error.
const usedTitles = new Set(["Welcome to Threadbase"]);

export function createThread({ title }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trimmed = (title || "").trim();
      if (!trimmed) {
        // shaped like an Axios error: error.response.data.message
        reject({ response: { data: { message: "Title is required" } } });
      } else if (usedTitles.has(trimmed)) {
        // mimics the Prisma P2002 duplicate error surfaced by the 3.4 error middleware
        reject({ response: { data: { message: "A thread with this title already exists" } } });
      } else {
        usedTitles.add(trimmed);
        resolve({ data: { id: crypto.randomUUID(), title: trimmed } });
      }
    }, 500);
  });
}

export function login({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "ada" && password === "password") {
        resolve({ data: { token: "fake-jwt-token" } });
      } else {
        reject({ response: { data: { message: "Invalid username or password" } } });
      }
    }, 500);
  });
}
