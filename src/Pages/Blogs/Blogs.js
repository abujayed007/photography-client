import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Loading from '../Loading/Loading';

const Blogs = () => {
    const {loading} = useContext(AuthContext)
    useTitle('Blogs')

    if(loading){
     return <Loading></Loading>
    }

    return (
        <div className='p-10 text-left'>
            <div className="shadow-lg text-white ">
                <h2 className="text-2xl font-semibold">Difference Between SQL and NoSQL?</h2>
                <h4 className="text-md">
                    <strong>SQL: <br /></strong>
                    <p className='inline'>
                        1. SQL databases are primarily called RDBMS or Relational Databases. Traditional RDBMS uses <br />
                        2. SQL syntax and queries to analyze and get the data for further insights. They are used for OLAP systems.Structured query language (SQL).
                        <br />
                        3. SQL databases are table based databases.
                        <br />
                        4. SQL databases have a predefined schema
                        <br />
                        5. SQL databases have a predefined schema
                    </p>
                </h4>
                <h4 className="text-md"><strong>NOSQL:</strong>
                    <br />
                    <p>
                        1.NoSQL databases are primarily called as Non-relational or distributed database <br />
                        2. NoSQL database system consists of various kind of database technologies. These databases were developed in response to the demands presented for the development of the modern application.
                        <br />
                        3. No declarative query language
                        <br />
                        4. NoSQL databases can be document based, key-value pairs, graph databases
                        <br />
                        5. NoSQL databases use dynamic schema for unstructured data.
                    </p>
                </h4>
            </div>
            <div className="inline p-10 shadow-lg text-white ">
                <h2 className="text-2xl font-semibold"> What is JWT? How does it work? </h2>
                <p>JWT or JSON Web Tokens are the new industry standards for securing APIs to and from the server. But what exactly is JWT? How does it work? Let us understand it more in detail.
                    <br />
                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                </p>
            </div>
            <div className="inline p-10 shadow-lg text-white ">
                <h2 className="text-2xl font-semibold"> What is the difference between javascript and NodeJS?</h2>
                <p>JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine. <br />

                    JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.
                    <br />
                    JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML.
                    <br />
                    JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development
                    <br />
                    JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser.

                    <br />
                    JavaScript requires any running environment as it can execute on any engine such as Firefox’s spider monkey, v8 engine of google chrome, JavaScript core of Safari whereas Node.js runs only on the v8 engine of google chrome.</p>
            </div>
            <div className="inline p-10 shadow-lg text-white ">
                <h2 className="text-2xl font-semibold">How does NodeJS handle multiple requests at the same time?</h2>
                <p>
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                </p>
            </div>
        </div>
    );
};

export default Blogs;