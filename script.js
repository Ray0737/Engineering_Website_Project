// DATABASE OF LESSONS
const library = {
    math: {
        title: "Advanced Engineering Mathematics",
        topics: [
            {
                name: "Logic: Equivalence & Argument Validity",
                tut: "<b>Fundamental Conditions:</b><br>• <b>Equivalence (≡):</b> Two propositions are equivalent only if their truth values are identical in all cases. Key rules: <br>&nbsp;&nbsp;1. p → q ≡ ~q → ~p (Contrapositive)<br>&nbsp;&nbsp;2. p → q ≡ ~p ∨ q<br>&nbsp;&nbsp;3. ~(p ∧ q) ≡ ~p ∨ ~q (De Morgan's).",
                exp: "<b>Engineering Detail:</b> Arguments are <b>Valid</b> only if the conjunction of premises implies the conclusion as a <i>Tautology</i>. In safety systems, we use the rule <code>((p → q) ∧ ~q) → ~p</code> (Modus Tollens). If 'If system is hot (p), then fan runs (q)' and 'Fan is not running (~q)', then we logically conclude 'System is not hot (~p)'.",
                prac: "Is ~p → ~q equivalent to q → p? <br><button class='btn btn-dark mt-2' onclick='alert(\"Correct! They are contrapositives of each other.\")'>Yes</button>"
            },
            {
                name: "Real Numbers: Closure & Inequalities",
                tut: "<b>Conditions for Property Sets:</b><br>• <b>Closure:</b> A set is closed under an operation if the result is always in the set. (e.g., Odd numbers are closed under multiplication but NOT addition: 3+3=6, which is even).<br>• <b>Absolute Value Inequalities:</b> <br>&nbsp;&nbsp;1. |x| < a ↔ -a < x < a (where a > 0)<br>&nbsp;&nbsp;2. |x| > a ↔ x > a ∨ x < -a.",
                exp: "<b>Engineering Detail:</b> We define <b>Boundaries (Supremum/Infimum)</b> for physical limits. If a sensor set S = {x | x = n/(n+1)}, the 'Least Upper Bound' is 1. The sensor value will approach but never exceed 1. Solving high-degree inequalities like (x-a)(x-b)/(x-c) ≥ 0 requires testing intervals on a number line while ensuring x ≠ c (denominator constraint).",
                prac: "Does the set {-2, 0, 2} have the closure property under addition? <br><button class='btn btn-dark mt-2' onclick='alert(\"No! 2 + 2 = 4, which is not in the set.\")'>No</button>"
            },
            {
                name: "Analytic Geometry: Linear Relationships",
                tut: "<b>Geometric Constraints:</b><br>• <b>Distance (d):</b> √((x₂-x₁)² + (y₂-y₁)²).<br>• <b>Parallel Lines:</b> m₁ = m₂.<br>• <b>Perpendicular Lines:</b> m₁ · m₂ = -1.<br>• <b>Distance Point to Line:</b> d = |Ax₁ + By₁ + C| / √(A² + B²).",
                exp: "<b>Engineering Detail:</b> To find the equation of a line parallel to 5x - 12y + 3 = 0 that is exactly 3 units from a point, we use the distance formula with an unknown constant 'C'. This is used in autonomous navigation to maintain a 'safety buffer' distance from a detected boundary line.",
                prac: "Find the distance between (4,3) and (-2,5). <br><input id='geoans' class='form-control mt-2' placeholder='√n'><button class='btn btn-dark mt-2' onclick='checkAns(\"geoans\", \"√40\")'>Check</button>"
            },
            {
                name: "Conic Sections Master Reference",
                tut: "<b>Identification:</b> Use the General Equation Ax² + Cy² + Dx + Ey + F = 0.",
                exp: `
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6 border-end">
                            <h5 class="text-primary">1. CIRCLE</h5>
                            <p><i>Occurs when A = C</i></p>
                            
                            <ul>
                                <li><b>General Form:</b> x² + y² + Dx + Ey + F = 0</li>
                                <li><b>Standard Form:</b> (x - h)² + (y - k)² = r²</li>
                                <li><b>Center:</b> (h, k) = (-D/2, -E/2)</li>
                                <li><b>Radius:</b> r = √(h² + k² - F)</li>
                            </ul>
                            <img src="pic/circle_graph.png" class="img-fluid rounded mb-3" alt="Circle Graph">

                            <h5 class="text-success mt-4">2. PARABOLA</h5>
                            <p><i>Occurs when A=0 or C=0 (One squared term)</i></p>
                            
                            <ul>
                                <li><b>General Form (Vert):</b> Ax² + Dx + Ey + F = 0</li>
                                <li><b>General Form (Horiz):</b> Cy² + Dx + Ey + F = 0</li>
                                <li><b>Standard (Vert):</b> (x - h)² = 4c(y - k)</li>
                                <li><b>Standard (Horiz):</b> (y - k)² = 4c(x - h)</li>
                                <li><b>Latus Rectum:</b> Length = |4c|</li>
                            </ul>
                            <img src="pic/ellipse_graph.png" class="img-fluid rounded mb-3" alt="Ellipse Graph">
                        </div>

                        <div class="col-md-6">
                            <h5 class="text-warning">3. ELLIPSE</h5>
                            <p><i>Occurs when A & C have same sign, but A ≠ C</i></p>
                            
                            <ul>
                                <li><b>General Form:</b> Ax² + Cy² + Dx + Ey + F = 0</li>
                                <li><b>Standard Form:</b> (x-h)²/a² + (y-k)²/b² = 1</li>
                                <li><b>Focal Distance:</b> c = √(a² - b²)</li>
                                <li><b>Major Axis:</b> 2a | <b>Minor Axis:</b> 2b</li>
                                <li><b>Latus Rectum:</b> 2b²/a</li>
                            </ul>
                            <img src="pic/ellipse_graph.png" class="img-fluid rounded mb-3" alt="Ellipse Graph">

                            <h5 class="text-danger mt-4">4. HYPERBOLA</h5>
                            <p><i>Occurs when A & C have opposite signs</i></p>
                            
                            <ul>
                                <li><b>General Form:</b> Ax² - Cy² + Dx + Ey + F = 0</li>
                                <li><b>Standard Form:</b> (x-h)²/a² - (y-k)²/b² = 1</li>
                                <li><b>Transverse Axis:</b> 2a (Horizontal if x² is positive)</li>
                                <li><b>Conjugate Axis:</b> 2b</li>
                                <li><b>Asymptotes:</b> y - k = ±(b/a)(x - h)</li>
                            </ul>
                            <img src="pic/hyperbola_graph.png" class="img-fluid rounded mb-3" alt="Hyperbola Graph">
                        </div>
                    </div>
                </div>`,
                prac: "<b>Task:</b> Convert x² + y² - 4x + 6y - 3 = 0. <br><button onclick='alert(\"Center: (2, -3), Radius: √(2² + (-3)² - (-3)) = √16 = 4\")'>Show Result</button>"
            }
        ]
    },
    physics: {
        title: "Applied Engineering Physics",
        topics: [
            {
                name: "0. Vectors & Scalars",
                tut: "Engineering quantities are either <b>Scalars</b> (magnitude only: mass, time, energy) or <b>Vectors</b> (magnitude + direction: displacement, velocity, force).",
                exp: "<b>Engineering Detail:</b> To analyze structures, we use <i>Vector Components</i>. Any force F can be broken into Fx = F cosθ and Fy = F sinθ. This allows us to solve complex 2D force systems using simple algebra.",
                prac: "A force of 10N acts at 60° to the horizontal. Find the horizontal component (Fx). <br><input id='vecans' class='form-control mt-2' placeholder='10 * cos(60)'><button class='btn btn-dark mt-2' onclick='checkAns(\"vecans\", \"5\")'>Check</button>"
            },
            {
                name: "1. Linear Motion",
                tut: "Motion in a straight line governed by constant acceleration (Suvat). <br>• v = u + at <br>• s = ((u+v)/2)t <br>• s = ut + ½at² <br>• v² = u² + 2as",
                exp: "<b>Engineering Detail:</b> Engineers use these to calculate 'Reaction Distance' and 'Braking Distance.' Total stopping distance = (Velocity × Reaction Time) + (v²/2a). This is critical for designing safe highway speed limits.",
                prac: "An object starts from rest and accelerates at 2m/s² for 5 seconds. What is its final velocity? <br><input id='linans' class='form-control mt-2'><button class='btn btn-dark mt-2' onclick='checkAns(\"linans\", \"10\")'>Check</button>"
            },
            {
                name: "2. Circular Motion",
                tut: "Motion in a curved path. <br>• <b>Centripetal Acceleration (ac):</b> v²/r or ω²r. <br>• <b>Centripetal Force (Fc):</b> mv²/r.",
                exp: "<b>Engineering Detail:</b> This explains 'Road Banking.' By tilting a curve at an angle θ, the Normal force helps provide the centripetal force (tanθ = v²/rg), allowing cars to turn safely even on icy roads without relying on friction.",
                prac: "If a car enters a turn with a smaller radius but the same speed, does the required centripetal force increase or decrease? <br><button class='btn btn-dark mt-2' onclick='alert(\"Correct! Force increases as radius decreases (F ∝ 1/r).\")'>Increase</button>"
            },
            {
                name: "3. Equilibrium & Torque",
                tut: "A body is in <b>Static Equilibrium</b> if: <br>1. ΣFx = 0, ΣFy = 0 (No translation) <br>2. Στ = 0 (No rotation). <br><b>Torque (τ):</b> r × F sinθ.",
                exp: "<b>Engineering Detail:</b> Used in 'Truss Analysis' for bridges. Every beam must have zero net force and zero net torque. We calculate the 'Moment of Force' around a pivot to ensure the bridge doesn't rotate under a heavy truck.",
                prac: "To loosen a tight bolt, is it better to use a longer or shorter wrench? <br><button class='btn btn-dark mt-2' onclick='alert(\"Correct! Longer wrench increases the lever arm (r), producing more torque.\")'>Longer</button>"
            },
            {
                name: "4. Work, Energy & Power",
                tut: "• <b>Work (W):</b> Fs cosθ. <br>• <b>Kinetic Energy (Ek):</b> ½mv². <br>• <b>Potential Energy (Ep):</b> mgh. <br>• <b>Power (P):</b> W/t or Fv.",
                exp: "<b>Engineering Detail:</b> The <i>Law of Conservation of Mechanical Energy</i> (E1 = E2) is used to design roller coasters and elevators. Energy lost to friction is calculated as Work (Wf = f × s).",
                prac: "A 500W motor lifts a load. How much work does it do in 10 seconds? <br><input id='workans' class='form-control mt-2'><button class='btn btn-dark mt-2' onclick='checkAns(\"workans\", \"5000\")'>Check</button>"
            },
            {
                name: "5. Momentum & Impulse",
                tut: "• <b>Momentum (p):</b> mv. <br>• <b>Impulse (J):</b> Δp = FΔt.",
                exp: "<b>Engineering Detail:</b> Car safety 'Crumple Zones' increase the time of impact (Δt). According to J = FΔt, increasing time decreases the average force (F) acting on the passengers, significantly reducing injury.",
                prac: "In a collision where two objects stick together, what is conserved? <br><button class='btn btn-dark mt-2' onclick='alert(\"Correct! Momentum is always conserved in collisions.\")'>Momentum</button>"
            }
        ]
    }
};

// ... include the loadLesson and renderTopic functions from previous code

// APP LOGIC
function loadLesson(subjectKey) {
    const data = library[subjectKey];
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('lesson-screen').classList.remove('hidden');
    document.getElementById('subject-sidebar-title').innerText = data.title;

    const list = document.getElementById('topic-list');
    list.innerHTML = "";
    data.topics.forEach((topic, index) => {
        const btn = document.createElement('button');
        btn.className = "list-group-item list-group-item-action py-3 border-0";
        btn.innerHTML = `<i class="bi bi-book me-2"></i> ${topic.name}`;
        btn.onclick = () => renderTopic(subjectKey, index);
        list.appendChild(btn);
    });
    renderTopic(subjectKey, 0);
}

function renderTopic(subjectKey, index) {
    const topic = library[subjectKey].topics[index];
    document.getElementById('topic-title').innerText = topic.name;
    document.getElementById('tutorial').innerHTML = `<h5>Concept</h5><p>${topic.tut}</p>`;
    document.getElementById('explanation').innerHTML = `<h5>Engineering Context</h5><p>${topic.exp}</p>`;
    document.getElementById('practice').innerHTML = `<h5>Solve the Problem</h5><div class='math-formula'>${topic.prac}</div>`;

    // Highlight sidebar
    const items = document.querySelectorAll('.list-group-item');
    items.forEach((item, i) => item.classList.toggle('active', i === index));
}

function goHome() {
    document.getElementById('home-screen').classList.remove('hidden');
    document.getElementById('lesson-screen').classList.add('hidden');
}

function checkAns(id, correct) {
    const userVal = document.getElementById(id).value.toLowerCase().trim();
    if (userVal === correct.toLowerCase()) alert("Excellent! That is correct.");
    else alert("Not quite. Hint: " + correct);
}

function filterHomeTopics() {
    let input = document.getElementById('mainSearch').value.toLowerCase();
    let cards = document.querySelectorAll('.topic-card');
    cards.forEach(card => {
        let title = card.getAttribute('data-title');
        card.style.display = title.includes(input) ? "block" : "none";
    });
}