export const getPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.log("ERROR", error);
  }
};

export const getPostDetails = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const post = await response.json();
    return post;
  } catch (error) {
    console.log("ERROR", error);
  }
};

export const getPostComments = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments`
    );
    const comments = await response.json();
    const filteredComments = comments?.filter(
      (comment) => comment?.postId === id
    );

    return filteredComments;
  } catch (error) {
    console.log("ERROR", error);
  }
};
