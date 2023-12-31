function menuToggle() {
    const page = document.getElementById('page');

    if (!page.classList.contains('opened')) {
        page.classList.add('opened');
    } else if (page.classList.contains('opened')) {
        page.classList.remove('opened')
    }
}


function expandItem() {
    const featuresDiv = document.getElementById('features-dropdown');
    const companyDiv = document.getElementById('company-dropdown');

    if (!featuresDiv.classList.contains('expanded')) { // collapsed will expand it
        featuresDiv.classList.add('expanded')
    } else if (featuresDiv.classList.contains('expanded')) { // expanded will collapse
        featuresDiv.classList.remove('expanded')
    }
}

function expandItem2() {
    const companyDiv = document.getElementById('company-dropdown');
    if (!companyDiv.classList.contains('expanded')) { // collapsed will expand it
        companyDiv.classList.add('expanded')
    } else if (companyDiv.classList.contains('expanded')) { // expanded will collapse
        companyDiv.classList.remove('expanded')
    }
}

function displayItem() {
    const featuresDivDesktop = document.getElementById('features-desktop');
    if (!featuresDivDesktop.classList.contains('expanded')) { // collapsed will expand it
        featuresDivDesktop.classList.add('expanded')
    } else if (featuresDivDesktop.classList.contains('expanded')) { // expanded will collapse
        featuresDivDesktop.classList.remove('expanded')
    }
}

function displayItem2() {
    const companyDivDesktop = document.getElementById('company-desktop');
    if (!companyDivDesktop.classList.contains('expanded')) { // collapsed will expand it
        companyDivDesktop.classList.add('expanded')
    } else if (companyDivDesktop.classList.contains('expanded')) { // expanded will collapse
        companyDivDesktop.classList.remove('expanded')
    }
}

window.addEventListener('DOMContentLoaded', function() {
    const openButton = document.getElementById('menu');
    const closeButton = document.getElementById('close-button')
    // const dropDownItems = document.getElementsByClassName('fets')

    // const dropDownArray = Array.from(dropDownItems);

    // dropDownArray.forEach(function(item) {
    //     item.addEventListener('click', expandItem)
    // });

    const companyDiv = document.getElementById('company-dropdown')
    const featuresDiv = document.getElementById('features-dropdown')
    
    companyDiv.addEventListener('click', expandItem2)
    featuresDiv.addEventListener('click', expandItem)

    const featuresDivDesktop = document.getElementById('features-desktop')
    const companyDivDesktop = document.getElementById('company-desktop')

    
    featuresDivDesktop.addEventListener('click', displayItem)
    companyDivDesktop.addEventListener('click', displayItem2)

    openButton.addEventListener('click', menuToggle)
    closeButton.addEventListener('click', menuToggle)
})