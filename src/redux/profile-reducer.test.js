import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

const state = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 15 },
    { id: 2, message: 'It\'s my first post', likesCount: 20 },
  ],
  userProfile: null,
  status: ''
};

test('length of posts should be incremented', () => {
  // 1. test data
  const action = addPostActionCreator('new post next for test');

  // 2. action
  const newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
});

test('message of new post should be correct', () => {
  // 1. test data
  const action = addPostActionCreator('new post next for test');

  // 2. action
  const newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts[2].message).toBe('new post next for test');
});

test('after deleting length of messages should be decrement', () => {
  // 1. test data
  const action = deletePost(1);

  // 2. action
  const newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(1);
});

test("after deleting length of messages shouldn't be decrement if id incorrect", () => {
  // 1. test data
  const action = deletePost(1009);

  // 2. action
  const newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(2);
});
