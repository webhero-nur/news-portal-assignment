const homeTab = () => {
    const cardsContainer0 = document.getElementById('cards-container');
    cardsContainer0.textContent = '';
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('row', 'row-cols-1', 'row-cols-md-3', 'g-4', 'w-100');
    homeDiv.innerHTML = `
    <div class="card">
        <img src="https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png" alt="No image found" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h5>
            <p class="card-text">Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy ...</p>
            <div class="d-flex justify-content-between py-2">
                <div class="d-flex">
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&amp;w=1000&amp;q=80" alt="No image found" style="max-width: 2rem; border-radius: 1rem;">
                    <span class="fw-bolder mx-2">Jimmy Dane</span>
                </div>
                <span><i class="fa-solid fa-eye"></i> 488K</span>
                <span><i class="fa-solid fa-star"></i> 4.5</span>
            </div>
            <button onclick="newsDetails('0282e0e58a5c404fbd15261f11c2ab6a')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsModal">Read More</button>
        </div>
    </div>
    <div class="card">
        <img src="https://i.ibb.co/BZZ5WKv/unsplash-Eh-Tc-C9s-YXsw-4.png" alt="No image found" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine</h5>
            <p class="card-text">Tucker Carlson has rarely met a dictator's ass he didn't want to kiss, and Vladimir Putin is at the very top of that puckering up list. The Fox News h...</p>
            <div class="d-flex justify-content-between py-2">
                <div class="d-flex">
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&amp;w=1000&amp;q=80" alt="No image found" style="max-width: 2rem; border-radius: 1rem;">
                    <span class="fw-bolder mx-2">Jennifer Wood</span>
                </div>
                <span><i class="fa-solid fa-eye"></i> 400K</span>
                <span><i class="fa-solid fa-star"></i> 4.8</span>
            </div>
            <button onclick="newsDetails('f69a695f037cd9484cecaea37ca71011')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsModal">Read More</button>
        </div>
    </div>
    <div class="card">
        <img src="https://i.ibb.co/T0PnZxD/unsplash-Eh-Tc-C9s-YXsw-8.png" alt="No image found" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">Joe Biden announces $3 billion in Ukraine weapons aid</h5>
            <p class="card-text">WASHINGTON: President Joe Biden announced nearly $3 billion in military aid to Kyiv on Wednesday -- the biggest US package so far -- to mark Ukraine's...</p>
            <div class="d-flex justify-content-between py-2">
                <div class="d-flex">
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&amp;w=1000&amp;q=80" alt="No image found" style="max-width: 2rem; border-radius: 1rem;">
                    <span class="fw-bolder mx-2">system</span>
                </div>
                <span><i class="fa-solid fa-eye"></i> 980K</span>
                <span><i class="fa-solid fa-star"></i> 4.5</span>
            </div>
            <button onclick="newsDetails('11468ed61aee84de492a8b04158a22f0')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsModal">Read More</button>
        </div>
    </div>
    <div class="card">
        <img src="https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png" alt="No image found" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">Biden announces $3 billion Ukraine military aid package on its Independence Day</h5>
            <p class="card-text">Published: 25 Aug 2022, 09: 09 US president Joe Biden speaks as he attends the first virtual meeting of the   I2U2   group with Israeli prime minister...</p>
            <div class="d-flex justify-content-between py-2">
                <div class="d-flex">
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&amp;w=1000&amp;q=80" alt="No image found" style="max-width: 2rem; border-radius: 1rem;">
                    <span class="fw-bolder mx-2">Reuters</span>
                </div>
                <span><i class="fa-solid fa-eye"></i> Not Enough ViewK</span>
                <span><i class="fa-solid fa-star"></i> 4.5</span>
            </div>
            <button onclick="newsDetails('7c4dfea0fafddc813673282a428429b7')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsModal">Read More</button>
        </div>
    </div>
    <div class="card">
        <img src="https://i.ibb.co/PxC67LV/unsplash-Eh-Tc-C9s-YXsw-1.png" alt="No image found" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">U.S. announces largest weapons package for Ukraine</h5>
            <p class="card-text">People's Daily Online (Xinhua) 08:16, August 25, 2022 The United States has committed more than 13.5 billion dollars in security assistance to Ukraine...</p>
            <div class="d-flex justify-content-between py-2">
                <div class="d-flex">
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&amp;w=1000&amp;q=80" alt="No image found" style="max-width: 2rem; border-radius: 1rem;">
                    <span class="fw-bolder mx-2">John Pike</span>
                </div>
                <span><i class="fa-solid fa-eye"></i> 320K</span>
                <span><i class="fa-solid fa-star"></i> 4.5</span>
            </div>
            <button onclick="newsDetails('30af81e91ab3eafc0bcae0de62f55d5c')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsModal">Read More</button>
        </div>
    </div>
    <div class="card">
        <img src="https://i.ibb.co/T0PnZxD/unsplash-Eh-Tc-C9s-YXsw-8.png" alt="No image found" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">U.S. concerned about India's participation in Russia military exercises</h5>
            <p class="card-text">Last month, Moscow announced plans to hold   Vostok   (East) exercises from Aug. 30 to Sept. 5, even as it wages a costly war in Ukraine. The military...</p>
            <div class="d-flex justify-content-between py-2">
                <div class="d-flex">
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&amp;w=1000&amp;q=80" alt="No image found" style="max-width: 2rem; border-radius: 1rem;">
                    <span class="fw-bolder mx-2">MarketScreener</span>
                </div>
                <span><i class="fa-solid fa-eye"></i> 89K</span>
                <span><i class="fa-solid fa-star"></i> 4.5</span>
            </div>
            <button onclick="newsDetails('919db97c34e0778b387dd40cdfa08130')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsModal">Read More</button>
        </div>
    </div>
    <div class="card">
        <img src="https://i.ibb.co/T0PnZxD/unsplash-Eh-Tc-C9s-YXsw-8.png" alt="No image found" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">Zelensky says he had ‘great conversation' with Biden, discussed Kiev's further steps</h5>
            <p class="card-text">KIEV, August 25. /TASS/. Ukrainian President Vladimir Zelensky said he had a   great   phone conversation with his US counterpart Joe Biden and discus...</p>
            <div class="d-flex justify-content-between py-2">
                <div class="d-flex">
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&amp;w=1000&amp;q=80" alt="No image found" style="max-width: 2rem; border-radius: 1rem;">
                    <span class="fw-bolder mx-2">system</span>
                </div>
                <span><i class="fa-solid fa-eye"></i> 798K</span>
                <span><i class="fa-solid fa-star"></i> 4.5</span>
            </div>
            <button onclick="newsDetails('374df11ae3d9b8b9ce21f4dc53f59b85')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsModal">Read More</button>
        </div>
    </div>
    <div class="card">
        <img src="https://i.ibb.co/vz5K0FB/unsplash-Eh-Tc-C9s-YXsw-10.png" alt="No image found" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">US to name military mission in Ukraine and appoint commander – WSJ</h5>
            <p class="card-text">Illustrative public photo In the coming weeks, the Joe Biden administration plans to name its military mission to support Ukraine and appoint a genera...</p>
            <div class="d-flex justify-content-between py-2">
                <div class="d-flex">
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&amp;w=1000&amp;q=80" alt="No image found" style="max-width: 2rem; border-radius: 1rem;">
                    <span class="fw-bolder mx-2">Kumar Natasha</span>
                </div>
                <span><i class="fa-solid fa-eye"></i> 231K</span>
                <span><i class="fa-solid fa-star"></i> 4.5</span>
            </div>
            <button onclick="newsDetails('be44c843d61859cc0b87cae85c55f9db')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsModal">Read More</button>
        </div>
    </div>
    `;

    cardsContainer0.appendChild(homeDiv);
}

homeTab();