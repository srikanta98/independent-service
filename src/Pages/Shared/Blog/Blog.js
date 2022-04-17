import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <h1 className='pip'>Question answer...!</h1>
            <div className="center texti">
                <div className="f-question">
                    <h1 className='mt-4'>Difference between authentication and authorization?</h1>
                    <p>So, what is the difference between authentication and authorization? Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. The first step is to confirm the identity of a passenger to make sure they are who they say they are. Once a passenger's identity has been determined, the second step is verifying any special services the passenger has access to, whether it's flying first-class or visiting the VIP lounge.</p>
                </div>
                <div className="q-question">
                    <h1>Why are you using firebase ? what other options do you have to implement authentication?</h1>
                    <p>Google's Firebase is a mobile platform that lets you develop mobile apps. It is especially geared towards business apps, with the intention of helping businesses grow their user bases and increase their profits through their mobile apps. The screenshot from Google Firebase below shows just some of the features that are a part of Firebase, again, with the intention of developing, growing and earning:..You can query the location service running on a device, which may be using GPS or Wi-Fi to triangulate its position, and you can use a geolocation by IP database.</p>
                </div>
                <div className="q-question">
                    <h1>What other service does firebase provide other than authentication?</h1>
                    <p>Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices...Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app.it provides Cloud firestore and functions ,hosting,cloud storage,google analytics and prediction</p>
                </div>
              
            </div>
        </div>
    );
};

export default Blog;