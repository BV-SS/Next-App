import { Note } from "@/types/note";

const notesData: Note[] = [
    {
        id:1,
        title: "Card title 1",
        content: "card content will go here",
        created_at: "2025-09-17",
        tag: "personal"
    },
     {
        id:2,
        title: "Card title 2",
        content: "If --list is given, or if there are no non-option arguments, existing branches are listed; the current branch will be highlighted in green and marked with an asterisk. Any branches checked out in linked worktrees will be highlighted in cyan and marked with a plus sign. Option -r causes the remote-tracking branches to be listed, and option -a shows both local and remote branches.",
        created_at: "2025-09-16",
        tag: "Business"
    },
    {
        id:3,
        title: "Card title 3",
        content: "card content will go here",
        created_at: "2025-09-15",
        tag: "personal"
    },
    {
        id:4,
        title: "Card title 4",
        content: "card content will go here",
        created_at: "2025-09-14",
        tag: "Home"
    },

]

export default notesData;