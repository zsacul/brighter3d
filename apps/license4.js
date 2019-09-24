function isSketchup()
{
    if (typeof(sketchup) !== 'undefined') return true;
    return false;
}

function b3dConnect(action)
{
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest()

    let s = "/apps/lic.php?"+action;
    
    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', s, true);

    request.onload = function() {
        if (isSketchup()) sketchup.response(this.response);
    }

    // Send request
    request.send();
}

function b3dActivate()
{
    setStatus('activating...');
    setAR(false,false);
    if (isSketchup()) sketchup.activate()    
}

function b3dRevoke()
{
    setStatus('revoking...');
    setAR(false,false);
    if (isSketchup()) sketchup.revoke();    
}

function b3dReCheck()
{   
    if (isSketchup()) sketchup.check();
}

function setStatus(text)
{
    let el = document.getElementById('b3dstatus');
    el.innerText = "License status: " + text;    
}

function setCompID(text)
{
    let el = document.getElementById('b3dcomputerid');
    el.innerText = "Computer ID: " + text;    
}

function setVersion(text)
{
    let el = document.getElementById('b3dversion');
    el.innerText = "Version: " + text;    
}

function setActivate(bActive)
{
    let el = document.getElementById('b3dactive');
    if (!bActive) el.classList.add("disabledbutton");
             else el.classList.remove("disabledbutton");
}

function setRevoke(bActive)
{
    let el = document.getElementById('b3drevoke');
    if (!bActive) el.classList.add("disabledbutton");
             else el.classList.remove("disabledbutton");
}

function setAR(s1,s2)
{
    setActivate(s1);
    setRevoke(s2);
}