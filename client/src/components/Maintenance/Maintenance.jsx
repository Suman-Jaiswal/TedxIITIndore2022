import React from 'react'

export default function Maintenance({ heading }) {
    return (
        <section className="container-maint bg-light">
            <div className="content">
                <div className="message text-dark">
                    <h1>{heading}</h1>
                    <img src="maintenance.webp" height={300} width={300} alt="" />
                    {/* <p>Stay tuned 👌</p> */}
                </div>
            </div>
        </section>
    )
}
