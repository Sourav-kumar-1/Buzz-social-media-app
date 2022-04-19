export const getLocalStorageData = (key) => {
  const data = window.localStorage.getItem(key);
  return Boolean(data) ? JSON.parse(data) : null;
};


// export const updatePostData = async (payload) => {
//   const res = await axios.put("", payload)
//   return res.data;
// }

// export const updateComments = (post, userId, commentText) => {
//   let payload  = {
//     ...post, 
//     comment : [{ id , userId, commentText } , ...post.comment]
//   };

//   updatePostData(payload);
// }