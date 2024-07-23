const bildOption = (data) => {
  const options = {};
  
  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
        'content-type': 'application/json'
    };
}
  const token = localStorage.getItem("accessToken");

  if (token) {
    options.headers = {
      ...options.headers,
      "X-Authorization": token,
    };
  }

  return options;
};

async function requester(method, url, data) {
  const response = await fetch(url, {
    ...bildOption(data),
    method,
  });

  if (response.status === 204) {
    return {};
  }

  const result = await response.json();

  if (!response.ok) {
    throw result;
  }

  return result;
}

export const get = requester.bind(null, "GET");
export const post = requester.bind(null, "POST");
export const put = requester.bind(null, "PUT");
export const del = requester.bind(null, "DELETE");
export const patch = requester.bind(null, "PATCH");
