var listData = [
    {
        "title": "Book a Meeting Room",
        "category": "Forms",
        "url": "https://www.google.co.uk/"
    },
    {
        "title": "Book a Pool Car",
        "category": "Forms",
        "url": "https://www.google.co.uk/"
    },
    {
        "title": "Order Stationery",
        "category": "Forms",
        "url": "https://www.google.co.uk/"
    },
    {
        "title": "Gift & Hospitality",
        "category": "Forms",
        "url": "https://www.google.co.uk/"
    },
    {
        "title": "Discovery Communications embraces Office 365",
        "category": "News",
        "url": "https://blogs.office.com/2016/07/18/discovery-communications-embraces-office-365-to-foster-creative-culture-of-innovation/"
    },
    {
        "title": "Guardian Industries",
        "category": "News",
        "url": "https://blogs.office.com/2016/07/15/guardian-industries-connect-collaborate-and-innovate-from-anywhere/"
    },
    {
        "title": "Data Loss Prevention Policy Tips in OneDrive",
        "category": "News",
        "url": "https://blogs.office.com/2016/07/14/data-loss-prevention-policy-tips-in-onedrive-mobile-apps/"
    },
    {
        "title": "Get started with SharePoint",
        "category": "Useful Information",
        "url": "https://support.office.com/en-us/article/Get-started-with-SharePoint-909ec2f0-05c8-4e92-8ad3-3f8b0b6cf261"
    },
    {
        "title": "What is SharePoint?",
        "category": "Useful Information",
        "url": "https://support.office.com/en-us/article/What-is-SharePoint-97b915e6-651b-43b2-827d-fb25777f446f"
    },
    {
        "title": "Accessibility features in SharePoint Online",
        "category": "Useful Information",
        "url": "https://support.office.com/en-us/article/Accessibility-features-in-SharePoint-Online-f291404a-dc7e-44de-a31f-d81b3099c2b9?ui=en-US&rs=en-US&ad=US"
    },
    {
        "title": "Videos for SharePoint Online and SharePoint 2013",
        "category": "Useful Information",
        "url": "https://support.office.com/en-us/article/Videos-for-SharePoint-Online-and-SharePoint-2013-ed074945-4ddc-4479-9efe-6b3945cf8266?ui=en-US&rs=en-US&ad=US"
    }
];



/**
 * Creates a document element
 * @param type
 * @param id
 * @param name
 * @returns {Element}
 */
function makeElement(type,id,name){
    var e = document.createElement(type);
    e.id = id;
    e.name = name;
    return e;
}

/**
 * Creates an Option Element
 * @param type
 * @param attr
 * @param text
 */
function makeOption(type,attr,text){
    var e = document.createElement(type);
    e.setAttribute(attr,attr);
    e.innerHTML = text;
    return e;

}

/**
 * Adds a function to an element
 * @param id
 * @param event
 * @param functionName
 */
function addElementFunction(id, event, functionName){
    var select = document.getElementById(id);
    select.setAttribute(event, functionName+"(event)");
}

/**
 *
 * @param list
 * @param classname
 * @param title
 * @param link
 */
function makeListElement(list,classname, title, link){
    var li = document.createElement("li");
    li.className= classname;
    li.innerHTML = "<a href ="+link+">"+title+"<span>></span>"+"<a>";
    document.getElementById(list).appendChild(li);
}

/**
 * Builds a navigation box from a array object
 * @param list
 */
function makeNav(list) {
    list.forEach(function (item) {
        if (item.category == list[0].category) {
            makeListElement("list1", "child", item.title, item.url.toString());
        }

    });
}

/**
 * Removes all children from an element
 * @param e
 */
function removeOptions(e) {
    while(e.childNodes.length >2){
        e.removeChild(e.lastChild)
    }
}