const text = "We provide a world class tax services. We have accredited business professionals specializing in accounting and taxation. In addition, we can assist individuals and agencies/organizations in incorporating decisions with their strategic decisions considering all around tax implications."

const newText = "One of the distinguishing feature of our services is that you walk in with your t4 and other documents and you walk out with your money. You don't need to worry about whether I was eligible for refund or what amount I was refunded. We will estimate on the spot and give you the fund."

const Home = () => {
    return (
        <div>
            <h1 className='text-center'>Welcome to TaxPro</h1>
            <p>{text}</p>
            <hr/>
            <p>{newText}</p>
            <img src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8dGF4JTIwc2VydmljZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="tax form"/>
            <figcaption className='text-center'>tax form being reviewed</figcaption>
        </div>
    )
}

export default Home;
