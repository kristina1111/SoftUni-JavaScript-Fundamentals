function solver(arr) {
    //Checks if the array contains the given element
    Array.prototype.contains = function(arg){
        for(var i = 0; i < this.length; i++)
            if(this[i] === arg)
                return true;
        return false;
    };

    let bannedUsers = arr.pop().split(' ').filter(e => e!=='');
    const regex = /(^| )(#)([a-zA-Z][a-zA-Z0-9_-]+[a-zA-Z0-9])(?!_|-|[a-zA-Z0-9])/g;
    let isAllowedToTransform = true;
    arr.forEach(function (e) {
        if(e.indexOf('<code>') !== -1){
            isAllowedToTransform = false;
            console.log(e);

            if(e.indexOf('</code>') !== -1) {
                isAllowedToTransform = true;
            }
            return;
        }

        if(e.indexOf('</code>') !== -1){
            isAllowedToTransform = true;
            console.log(e);
            return;
        }

        if(isAllowedToTransform){
            e = e.replace(regex, replaceWithAnchorTag);
        }
        console.log(e);
    });

    function replaceWithAnchorTag(match, $1, $2, $3) {
        // console.log($1);
        if(!bannedUsers.contains($3)){
            return $1 + '<a href="/users/profile/show/' + $3 + '">' + $3 + '</a>';
        }
        return $1 + '*'.repeat($3.length);
    }
}
// solver([ '#RoYaL: I\'m not sure what you mean,',
//     'but I am confident that I\'ve written',
//     'everything correctly. Ask #iordan_93',
//     'and #pesho if you don\'t believe me',
//     '<code>',
//     '#trying to print stuff',
//     'print("yoo")',
//     '</code>',
//     'pesho gosho' ]);

// solver([
//     'Far far away, behind the word mountains,',
//     'far from the countries #Vokalia and Consonantia,',
//     'there live the #blind texts. Separated they #live in Bookmarksgrove',
//     'right at the coast of the Semantics, a large language ocean.',
//     'A #small #river named #Duden flows by their place and supplies',
//     'it with the necessary regelialia. It is a paradisematic country,',
//     'in which roasted parts of sentences fly into your mouth.',
//     'Even the all-powerful #Pointing has no control about the blind texts',
//     'it is an almost unorthographic life One day however a small line of blind',
//     'text by the name <code> of Lorem Ipsum #decided to </code>',
//     'leave for the far World of Grammar.',
//     'The Big #Oxmox advised her',
//     'not to do so, because there were thousands of bad Commas,',
//     'wild Question Marks and devious Semikoli,',
//     'but the Little Blind Text didn\'t listen.',
//     'small river Vokalia',
// ])

solver([
    '<code>',
    '#lele',
    '#pochna se </code>',
    '<code> #mani_begai #gosho <code>',
    'gosho'
])