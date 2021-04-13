var list = document.getElementById('current-channels-list');
var addButton = document.getElementById('add-button');
var input = document.getElementById('input-field');

window.onload = () => {
    let index = 0;

    // get all channels from storage to display
    chrome.storage.sync.get({ list: [] }, (data) => {
        data.list.forEach(element => {
            index++;
            let thisIndex = index;
            var li = document.createElement('li');
            list.appendChild(li);
            li.innerHTML = element + "  ";

            // delete button for each element
            var deleteButton = document.createElement('button');
            deleteButton.innerHTML = 'Remove';
            deleteButton.addEventListener('click', () => {
                data.list.splice(thisIndex - 1, 1);
                chrome.storage.sync.set({ list: data.list }, () => {
                    console.log("removed item");
                })
            })
            li.appendChild(deleteButton);
            // console.log(element);
        });
    })

    // add channel id and name to chrome storage
    addButton.addEventListener('click', () => {
        chrome.storage.sync.get({ list: [] }, (data) => {
            console.log(data.list);
            update(data.list);
        })

        const update = (array) => {
            if (input.value.includes('channel') && input.value.includes('youtube')) {
                var channelId = input.value.slice(input.value.lastIndexOf('/') + 1);
                array.push(channelId);
                chrome.storage.sync.set({ list: array }, () => {
                    console.log("updated list");
                })
            } else {
                alert('Please enter a valid youtube channel')
            }
        }
    })
}