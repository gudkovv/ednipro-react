function Contacts() {
    return (
        <div className="contacts">
            <div className="mainContainer">
                <div className="contactsContent">
                    <div className="mapBlock">
                        <iframe
                            src="https://www.google.com/maps?q=вулиця+Старокозацька,+58,+Дніпро,+Дніпропетровська+область&output=embed"
                            width="500"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="map"
                        ></iframe>
                    </div>
                    <div className="contactsInfo">
                        <h2 id="contacts">Контакти</h2>
                        <p>Щоб записатися на екскурсію у будь який з цих музеїв, телефонуйте за номерами:</p>
                        
                        <p id="bolder">+380 095 456 789</p>
                        <p id="bolder">+380 097 456 789</p>
                        <p id="bolder">Часи роботи: Пн-Пт 9:00-18:00</p>
                        <p>або звертайтеся за адресою:</p>
                        <p id="bolder">Вулиця Старокозацька, 58, Дніпро, Дніпропетровська область</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contacts;