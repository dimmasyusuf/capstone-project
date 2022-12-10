const BASE_URL = "https://63660b33046eddf1baf77f68.mockapi.io/api/v1";

function getAccessToken() {
  return localStorage.getItem("accessToken");
}

function putAccessToken(accessToken) {
  return localStorage.setItem("accessToken", accessToken);
}

async function addUser(user) {
  return fetch(`${BASE_URL}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((response) => response.json());
}

const getUser = () => {
  return fetch("https://63660b33046eddf1baf77f68.mockapi.io/api/v1/user").then((res) => res.json());
};

async function addArgument({ title, argument, instansi, sumber, kategori }) {
    const response = await fetch(`${BASE_URL}/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, argument, instansi, sumber, kategori  }),
    });
  
    const responseJson = await response.json();
  
    if (responseJson.status !== "success") {
      return { error: true, data: null };
    }
  
    return { error: false, data: responseJson.data };
  }

  async function getDetailArgument() {
    const response = await fetch(`${BASE_URL}/post/27`);
    const responseJson = await response.json();
    if (responseJson.error) {
      console.log(responseJson.message);
    } else {
      console.log(responseJson);
    }
    return responseJson;
  }

  async function addComment({ komentar, sumber }) {
    const response = await fetch(`${BASE_URL}/post/27/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ komentar, sumber }),
    });
  
    const responseJson = await response.json();
  
    if (responseJson.status !== "success") {
      return { error: true, data: null };
    }
  
    return { error: false, data: responseJson.data };
  }

  async function getComment() {
    const response = await fetch(`${BASE_URL}/post/27/comment`);
    const responseJson = await response.json();
    if (responseJson.error) {
      console.log(responseJson.message);
    } else {
      console.log(responseJson);
    }
    return responseJson;
  }

  async function getAllPost(){
    const response = await fetch(`${BASE_URL}/post?sortBy=createdAt&order=desc`);
    const responseJson = await response.json();

    return {data: responseJson}
  }

  async function getPost(id) {
    const response = await fetch(`${BASE_URL}/post/${id}`);
    const responseJson = await response.json();

    console.log(responseJson);

    if (responseJson.id !== `${id}` ) {
        return { data: null };
      }

    return {data: responseJson}
  }

  async function getUserLogged() {

    const loggedId = localStorage.getItem('id');
  
    return { data: loggedId };
  }

export { addArgument, addUser, getUser, getDetailArgument, getComment, addComment, getAllPost, getPost, getAccessToken, putAccessToken, getUserLogged };
