// calculate the current year and date modified

const now = new Date();

function setCurrentYear(obj)
{
  obj.textContent = now.getFullYear();
}

function setLastModified(obj)
{
    obj.textContent = document.lastModified();
}

export {setLastModified, setCurrentYear};