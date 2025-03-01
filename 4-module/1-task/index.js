function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  let template = '';
  for (let i = 0; i < friends.length; i += 1) {
    template += `<li>${friends[i].firstName} ${friends[i].lastName}</li>`
  }
  ul.innerHTML = template;
  return ul
}
