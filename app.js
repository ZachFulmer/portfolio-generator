var profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfileData = (ProfileDataArr) => 
{
    for(let i = 0; i < ProfileDataArr.length; i++)
    {
        console.log(ProfileDataArr[i]);
    }

    console.log("===================");

    // Is the same as this...
    ProfileDataArr.forEach((profileItem) => console.log(profileItem));

};

printProfileData(profileDataArgs);