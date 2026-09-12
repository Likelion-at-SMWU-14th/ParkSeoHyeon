// 회원가입
export const createUser = async ({ username, password }) => {
  console.log("POST /api/users", { username, password });

  return {
    id: 1,
    username,
  };
};

// 마이페이지 조회
export const fetchUser = async (userId) => {
  console.log(`GET /api/users/${userId}`);

  return {
    id: userId,
    username: "seohyun",
  };
};

// 개인정보 수정
export const updateUser = async ({ userId, ...updatedFields }) => {
  console.log(`PUT /api/users/${userId}`, updatedFields);

  return {
    id: userId,
    ...updatedFields,
  };
};

// 회원 탈퇴
export const deleteUser = async (userId) => {
  console.log(`DELETE /api/users/${userId}`);

  return userId;
};
