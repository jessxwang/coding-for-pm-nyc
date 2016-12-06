var newFriendName = function(){
	var nameInput = document.getElementById('friend-name');
	var newNameElement = document.createElement('p');

	newNameElement.innerText = nameInput.value;

	return newNameElement;
};

var newHomeTown = function(){
	var hometownInput = document.getElementById('friend-hometown');
	var newHometownElement = document.createElement('p');

	newHometownElement.innerText = hometownInput.value;

	return newHometownElement;
};

var newFriendMeeting = function(){
	var meetingInput = document.getElementById('friend-meeting');
	var newMeetingElement = document.createElement('p');

	newMeetingElement.innerText = meetingInput.value;

	return newMeetingElement;
};

var resetFields = function(){
	var nameInput = document.getElementById('friend-name');
	var hometownInput = document.getElementById('friend-hometown');
	var meetingInput = document.getElementById('friend-meeting');

	nameInput.value = '';
	hometownInput.value = '';
	meetingInput.value = '';
};

var addNewFriend = function(){
	// prepare our elements
	var friendList = document.getElementById('friend-list');
	var newListItem = document.createElement('li');

	// Create the new elements from the form
	var newName = newFriendName();
	var newHometown = newHomeTown();
	var newMeeting = newFriendMeeting();

	// Add the new data elements to the li element
	newListItem.appendChild(newName);
	newListItem.appendChild(newHometown);
	newListItem.appendChild(newMeeting);

	// Add the li element to the ul
	friendList.appendChild(newListItem);
	resetFields();
};

window.onload = function(){
	var submitButton = document.getElementById('friend-data-submit');
	submitButton.addEventListener('click', addNewFriend)
};