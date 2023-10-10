import { render, screen, fireEvent } from "@testing-library/react"
import Like from "../like";

test("Defaults to 0 likes", () => {
    render(<Like />);
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
})

test("Add like when clicked", () => {
    render(<Like />);
    const likeButton = screen.getByText("Like");
    const likesBeforeClick = parseInt(screen.getByText("Likes: 0").textContent.split(": ")[1]);

    fireEvent.click(likeButton);

    expect(screen.getByText(`Likes: ${likesBeforeClick + 1}`)).toBeInTheDocument();
});

test("Add dislike when clicked", () => {
    render(<Like />);
    const dislikeButton = screen.getByText("Dislike");
    const likesBeforeClick = parseInt(screen.getByText("Likes: 0").textContent.split(": ")[1]);

    fireEvent.click(dislikeButton);

    expect(screen.getByText(`Likes: ${likesBeforeClick - 1}`)).toBeInTheDocument();
});
