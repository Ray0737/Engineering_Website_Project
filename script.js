// DATABASE OF LESSONS
const library = {
    math: {
        title: "Advanced Engineering Mathematics",
        topics: [
            {
                name: "Set Theory: Operations & Elements",
                tut: `
                    <div class="row">
                        <div class="col-md-6 border-end">
                            <h6 class="text-primary fw-bold">1. Basics & Notation</h6>
                            <ul class="small">
                                <li><b>Set:</b> A collection of distinct objects. A = {1, 2, 3}</li>
                                <li><b>Element (∈):</b> x ∈ A means x is in set A.</li>
                                <li><b>Subset (⊂):</b> A ⊂ B means every element of A is in B.</li>
                                <li><b>Empty Set (∅):</b> A set with no elements.</li>
                                <li><b>Power Set (P):</b> The set of all subsets. Total subsets = 2ⁿ (where n is the number of elements).</li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <h6 class="text-success fw-bold">2. Set Operations</h6>
                            <ul class="small">
                                <li><b>Union (∪):</b> A ∪ B (Everything in A or B).</li>
                                <li><b>Intersection (∩):</b> A ∩ B (Only common elements).</li>
                                <li><b>Difference (−):</b> A − B (Elements in A but NOT in B).</li>
                                <li><b>Complement (A'):</b> Elements in the Universal set (U) not in A.</li>
                            </ul>
                        </div>
                    </div>
                    `,
                exp: `
                    <h6 class="text-primary">Cardinality & Logic</h6>
                    <p><b>Cardinality |A|:</b> The number of elements in a set. For two sets, the formula is: <br>
                    |A ∪ B| = |A| + |B| − |A ∩ B|.</p>
                    <p><b>Engineering Application:</b> In database querying (SQL) and digital logic, sets are used to filter data and define logic gates. In probability, the sample space is treated as a <b>Universal Set</b>, and events are <b>Subsets</b>.</p>
                    `,
                prac: `
                    <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                        <div class="mb-3">
                            1. If A = {1, 2} and B = {2, 3}, what is A ∩ B? 
                            <button class="btn btn-sm btn-dark ms-2" onclick="alert('{2}')">Show</button>
                        </div>
                        <div class="mb-3">
                            2. How many subsets does a set with 3 elements have? 
                            <button class="btn btn-sm btn-dark ms-2" onclick="alert('2³ = 8')">Show Result</button>
                        </div>
                        <div class="mb-3">
                            3. If A ⊂ B, what is A ∩ B? 
                            <button class="btn btn-sm btn-dark ms-2" onclick="alert('A')">Show</button>
                        </div>
                    </div>`
            },
            {
                name: "Logic: Tautology, Equivalence & Arguments",
                tut: `
                        <div class="row">
                            <div class="col-md-6 border-end">
                                <h6 class="text-primary fw-bold">1. Truth Table & Conditionals</h6>
                                <table class="table table-sm table-bordered text-center small mb-3">
                                    <thead class="table-dark">
                                        <tr><th>p</th><th>q</th><th>p → q</th><th>p ↔ q</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>T</td><td>T</td><td class="table-success">T</td><td>T</td></tr>
                                        <tr><td>T</td><td>F</td><td class="table-danger">F</td><td>F</td></tr>
                                        <tr><td>F</td><td>T</td><td class="table-success">T</td><td>F</td></tr>
                                        <tr><td>F</td><td>F</td><td class="table-success">T</td><td>T</td></tr>
                                    </tbody>
                                </table>

                                <h6 class="text-danger fw-bold small">2. Negation (~ / ¬) & Open Sentences</h6>
                                <ul class="small">
                                    <li><b>Negation:</b> Reverses truth value. ~(p ∧ q) ≡ ~p ∨ ~q</li>
                                    <li><b>Open Sentence (ประโยคเปิด):</b> A statement with a variable (e.g., "x + 2 = 5") that is neither T/F until x is defined.</li>
                                </ul>
                            </div>
                            
                            <div class="col-md-6">
                                <h6 class="text-success fw-bold">3. Equivalence (สมมูล ≡) & Tautology</h6>
                                <ul class="small">
                                    <li><b>Implication:</b> p → q ≡ ~p ∨ q</li>
                                    <li><b>Contrapositive:</b> p → q ≡ ~q → ~p</li>
                                    <li><b>Tautology (สัจนิรันดร์):</b> A statement that is always <b>True</b> (e.g., p ∨ ~p). Verify via truth table (all T's).</li>
                                </ul>
                                <h6 class="text-warning fw-bold small">4. SIMP Rules (Simplification)</h6>
                                <code class="d-block small">p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)</code>
                                <code class="d-block small">p ∨ (p ∧ q) ≡ p (Absorption)</code>
                            </div>
                        </div>`,
                exp: `
                        <div class="container-fluid">
                            <h6 class="fw-bold border-bottom pb-1">Rules of Inference (การอ้างเหตุผล)</h6>
                            <div class="row g-2 small">
                                <div class="col-6">
                                    <div class="bg-light p-2 border rounded">
                                        <b>M.P. (Modus Ponens):</b><br>[(p → q) ∧ p] ⇒ q
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="bg-light p-2 border rounded">
                                        <b>M.T. (Modus Tollens):</b><br>[(p → q) ∧ ~q] ⇒ ~p
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="bg-light p-2 border rounded">
                                        <b>H.S. (Hypothetical Syllogism):</b><br>[(p → q) ∧ (q → r)] ⇒ (p → r)
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="bg-light p-2 border rounded">
                                        <b>D.S. (Disjunctive Syllogism):</b><br>[(p ∨ q) ∧ ~p] ⇒ q
                                    </div>
                                </div>
                                <div class="col-4 text-center">
                                    <b>Simp:</b><br>(p ∧ q) ⇒ p
                                </div>
                                <div class="col-4 text-center">
                                    <b>Add:</b><br>p ⇒ (p ∨ q)
                                </div>
                                <div class="col-4 text-center">
                                    <b>C.D./D.D.:</b><br>Constructive/Destructive Dilemma
                                </div>
                            </div>
                            <p class="mt-2 small text-muted"><i>Engineering Note: Valid if [Premises] → Conclusion is a <b>Tautology</b>.</i></p>
                        </div>`,
                prac: `
                <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                    <div class="mb-3">
                        1. If we have (p → q) and ~q, what can we conclude?
                        <button class="btn btn-sm btn-dark ms-2" onclick="alert('~p (Modus Tollens)')">Show Result</button>
                    </div>
                    <div class="mb-3">
                        2. Which rule states p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)?
                        <button class="btn btn-sm btn-dark ms-2" onclick="alert('Distributive Law')">Show</button>
                    </div>
                </div>`
            },
            {
                name: "Real Number System & Polynomials",
                tut: `
                    <div class="row">
                        <div class="col-md-6 border-end">
                            <h6 class="text-primary fw-bold">1. Properties & Logic</h6>
                            <ul class="small">
                                <li><b>Closure Property:</b> If a, b ∈ R, then a + b and a · b are in R.</li>
                                <li><b>Identity:</b> Addition is 0; Multiplication is 1.</li>
                                <li><b>Inverse:</b> a + (-a) = 0; a · (1/a) = 1 (where a ≠ 0).</li>
                                <li><b>Locus/Bound:</b> A set S has an <b>Upper Bound</b> if there is a number greater than or equal to all elements in S.</li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <h6 class="text-success fw-bold">2. Polynomial Theory</h6>
                            <ul class="small">
                                <li><b>Remainder Theorem:</b> If P(x) is divided by (x - c), the remainder is P(c).</li>
                                <li><b>Factor Theorem:</b> (x - c) is a factor if P(c) = 0.</li>
                                <li><b>Synthetic Division:</b> Used to find roots of high-degree polynomials (e.g., x³, x⁴).</li>
                            </ul>
                        </div>
                    </div>
                    `,
                exp: `
                    <div class="container-fluid">
                        <h6 class="text-danger fw-bold">Advanced Inequality & Absolute Value</h6>
                        <div class="row">
                            <div class="col-md-7 small">
                                <b>Absolute Value Cases:</b> To solve |x + a| = |x - b|, split into intervals:
                                <ol>
                                    <li>Case 1: x < -a</li>
                                    <li>Case 2: -a ≤ x < b</li>
                                    <li>Case 3: x ≥ b</li>
                                </ol>
                                <b>Critical Points:</b> Use the number line method (+, -, +) for inequalities like (x-a)(x-b) ≥ 0.
                            </div>
                            <div class="col-md-5">
                                <p class="small bg-light p-2 border rounded">
                                    <b>Quadratic Formula:</b><br>
                                    x = [-b ± √(b² - 4ac)] / 2a
                                </p>
                            </div>
                        </div>
                        <p class="mt-2 small"><i>Review Note: When solving rational inequalities, never cross-multiply by a variable unless you know its sign! Move all terms to one side and find a common denominator.</i></p>
                    </div>`,
                prac: `
                <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                    <div class="mb-3">
                        1. If (x - 2) is a factor of 2x³ + ax² + bx + 12, what is P(2)? 
                        <button class="btn btn-sm btn-dark ms-2" onclick="alert('0')">Show</button>
                    </div>
                    <div class="mb-3">
                        2. Solve |x + 3| < 4: 
                        <button class="btn btn-sm btn-dark ms-2" onclick="alert('-7 < x < 1')">Show Interval</button>
                    </div>
                    <div class="mb-3">
                        3. What is the identity of operation a*b = ab/2? 
                        <button class="btn btn-sm btn-dark ms-2" onclick="alert('e = 2')">Show</button>
                    </div>
                </div>`
            }
            ,
            {
                name: "Analytic Geometry: Linear Relationships",
                tut: "<b>Geometric Constraints:</b><br>• <b>Distance (d):</b> √((x₂ - x₁)² + (y₂ - y₁)²).<br>• <b>Parallel Lines:</b> m₁ = m₂.<br>• <b>Perpendicular Lines:</b> m₁ · m₂ = -1.<br>• <b>Distance Point to Line:</b> d = |Ax₁ + By₁ + C| / √(A² + B²).",
                exp: "<b>Engineering Detail:</b> To find the equation of a line parallel to 5x - 12y + 3 = 0 that is exactly 3 units from a point, we use the distance formula with an unknown constant 'C'. This is used in autonomous navigation to maintain a 'safety buffer' distance from a detected boundary line.",
                prac: `
                <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                    <div class="mb-3">
                        1. Find the distance between (4,3) and (-2,5).
                        <input id='geoans' class='form-control form-control-sm d-inline-block w-25 mt-2 ms-2' placeholder='√n'>
                        <button class='btn btn-sm btn-dark ms-2' onclick='checkAns(\"geoans\", \"√40\")'>Check</button>
                    </div>
                </div>`
            },
            {
                name: "Conic Sections Master Reference",
                tut: `
                    <div class="container-fluid">
            
                        <div class="row border-bottom pb-3">
                            <div class="col-12">
                                <h5 class="text-primary">1. CIRCLE (A = C)</h5>
                                <ul class="small">
                                    <li><b>General Form:</b> x² + y² + Ax + By + C = 0</li>
                                    <li><b>Standard Form:</b> (x - h)² + (y - k)² = r²</li>
                                    <li><b>Center:</b> (-A/2, -B/2) | <b>Radius:</b> √[A² + B² - 4C] / 2</li>
                                </ul>
                            </div>
                        </div>
            
                        <div class="row border-bottom py-3">
                            <h5 class="text-success">2. PARABOLA (Only one squared term)</h5>
                            <div class="col-md-6">
                                <h6 class="small fw-bold text-decoration-underline">Horizontal (L-R)</h6>
                                <ul class="small">
                                    <li><b>Std Form:</b> (y - k)² = 4c(x - h)</li>
                                    <li><b>Gen Form:</b> Cy² + Dx + Ey + F = 0</li>
                                    <li><b>Focus:</b> (h + c, k) | <b>Directrix:</b> x = h - c</li>
                                </ul>
                            </div>
                            <div class="col-md-6 border-end">
                                <h6 class="small fw-bold text-decoration-underline">Vertical (U-D)</h6>
                                <ul class="small">
                                    <li><b>Std Form:</b> (x - h)² = 4c(y - k)</li>
                                    <li><b>Gen Form:</b> Ax² + Dx + Ey + F = 0</li>
                                    <li><b>Focus:</b> (h, k + c) | <b>Directrix:</b> y = k - c</li>
                                </ul>
                            </div>
                            <p class="small ps-3 mb-0"><b>Common:</b> Vertex (h, k) | Latus Rectum = |4c|</p>
                        </div>
            
                        <div class="row border-bottom py-3">
                            <h5 class="text-warning">3. ELLIPSE (A, C same sign, A ≠ C)</h5>
                            <div class="col-md-6 border-end">
                                <h6 class="small fw-bold text-decoration-underline">Horizontal (L-R)</h6>
                                <p class="small mb-1"><i>(a² is under x)</i></p>
                                <ul class="small">
                                    <li><b>Std Form:</b> (x-h)²/a² + (y-k)²/b² = 1</li>
                                    <li><b>Focus:</b> (h ± c, k) | <b>Major Points:</b> (h ± a, k)</li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <h6 class="small fw-bold text-decoration-underline">Vertical (U-D)</h6>
                                <p class="small mb-1"><i>(a² is under y)</i></p>
                                <ul class="small">
                                    <li><b>Std Form:</b> (x-h)²/b² + (y-k)²/a² = 1</li>
                                    <li><b>Focus:</b> (h, k ± c) | <b>Major Points:</b> (h, k ± a)</li>
                                </ul>
                            </div>
                            <div class="col-12 small mt-1">
                                <b>Common:</b> Gen Form: Ax² + Cy² + Dx + Ey + F = 0 | c = √[a² - b²] | Latus Rectum = 2b²/a | E = c/a
                            </div>
                        </div>
            
                        <div class="row py-3">
                            <h5 class="text-danger">4. HYPERBOLA (A, C opposite signs)</h5>
                            <div class="col-md-6 border-end">
                                <h6 class="small fw-bold text-decoration-underline">Horizontal (L-R)</h6>
                                <p class="small mb-1"><i>(x term is positive)</i></p>
                                <ul class="small">
                                    <li><b>Std Form:</b> (x-h)²/a² - (y-k)²/b² = 1</li>
                                    <li><b>Asymptote:</b> y - k = ±(b/a)(x - h)</li>
                                    <li><b>Focus:</b> (h ± c, k)</li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <h6 class="small fw-bold text-decoration-underline">Vertical (U-D)</h6>
                                <p class="small mb-1"><i>(y term is positive)</i></p>
                                <ul class="small">
                                    <li><b>Std Form:</b> (y-k)²/a² - (x-h)²/b² = 1</li>
                                    <li><b>Asymptote:</b> y - k = ±(a/b)(x - h)</li>
                                    <li><b>Focus:</b> (h, k ± c)</li>
                                </ul>
                            </div>
                            <div class="col-12 small mt-1">
                                <b>Common:</b> Gen Form: Ax² - Cy² + Dx + Ey + F = 0 | c = √[a² + b²] | Latus Rectum = 2b²/a
                            </div>
                        </div>
                    </div>`,
                exp: `<div class="row">
                        <div class="col-12">
                            <h6 class="text-primary fw-bold">Advanced Conic Theory (Locus & Identification)</h6>
                            <p class="small">Every conic is a cross-section of a double cone or the locus of a point <b>P(x, y)</b> where the ratio of its distance from a focus <b>(F)</b> and a directrix <b>(L)</b> is constant <b>(e)</b>.</p>
                            
                            <div class="bg-light p-2 border rounded mb-2">
                                <p class="small mb-1"><b>General Equation:</b> Ax² + Cy² + Dx + Ey + F = 0</p>
                                <ul class="small mb-0">
                                    <li><b>Circle:</b> A = C (Same coefficients)</li>
                                    <li><b>Parabola:</b> A·C = 0 (Only one variable is squared)</li>
                                    <li><b>Ellipse:</b> A·C > 0 (A and C have same sign, A ≠ C)</li>
                                    <li><b>Hyperbola:</b> A·C < 0 (A and C have opposite signs)</li>
                                </ul>
                            </div>

                            <h6 class="text-success small fw-bold">The Definition of Locus:</h6>
                            <ul class="small">
                                <li><b>Sum of Distances:</b> If PF₁ + PF₂ = Constant (2a), the locus is an <b>Ellipse</b>.</li>
                                <li><b>Difference of Distances:</b> If |PF₁ - PF₂| = Constant, the locus is a <b>Hyperbola</b>.</li>
                                <li><b>Equidistance:</b> If PF = PL, the locus is a <b>Parabola</b>.</li>
                            </ul>
                            
                            <p class="small text-muted"><i>Note: In your M.4 Review, if the constant sum is less than the distance between foci, no real locus exists (Empty Set).</i></p>
                        </div>
                    </div>`,
                prac: `
                <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                    <div class="mb-3">
                        1. Convert x² + y² - 4x + 6y - 3 = 0 to standard form.
                        <button class="btn btn-sm btn-dark ms-2" onclick="alert('Center: (2, -3), Radius: 4')">Show Result</button>
                    </div>
                    <div class="mb-3">
                        2. If A·C < 0 in the general equation, what is the conic section?
                        <button class="btn btn-sm btn-dark ms-2" onclick="alert('Hyperbola')">Show</button>
                    </div>
                </div>`
            },
            {
                name: "Function Theory & Classification",
                tut: `
                    <div class="row">
                        <div class="col-md-6 border-end">
                            <h6 class="text-primary fw-bold">1. Definitions & Mapping</h6>
                            <ul class="small">
                                <li><b>Cartesian Product (A × B):</b> Set of all ordered pairs (a, b).</li>
                                <li><b>Relation vs Function:</b> A function assigns exactly one output for every input.</li>
                                <li><b>Domain (D_f):</b> All possible x-values.</li>
                                <li><b>Range (R_f):</b> All possible y-values.</li>
                                <li><b>1-1 (Injective):</b> Every x has a unique y.</li>
                                <li><b>Onto (Surjective):</b> Every y in the codomain is reached.</li>
                            </ul>
                            <h6 class="text-danger fw-bold small">2. Function Operations</h6>
                            <p class="small">
                                (f + g)(x) = f(x) + g(x)<br>
                                (f · g)(x) = f(x) · g(x)<br>
                                <b>Composite:</b> (f ∘ g)(x) = f(g(x))<br>
                                <b>Inverse (f⁻¹):</b> Swap x and y, then solve for y.
                            </p>
                        </div>
                        <div class="col-md-6">
                            <h6 class="text-success fw-bold">3. Common Types</h6>
                            <ul class="small">
                                <li><b>Linear:</b> f(x) = mx + c</li>
                                <li><b>Quadratic:</b> f(x) = ax² + bx + c | f(x) = a(x - h)² + k</li>
                                <b>Coordinate Formulas:</b> h = -b / 2a | k = (4ac - b²) / 4a²<br>
                                <li><b>Exponential:</b> f(x) = aˣ</li>
                                <li><b>Step Function:</b> Constant values over intervals (e.g., floor function).</li>
                            </ul>
                            <h6 class="text-warning fw-bold small">4. Verification</h6>
                            <p class="small">
                                <b>Vertical Line Test:</b> Checks if a relation is a function.<br>
                                <b>Horizontal Line Test:</b> Checks if a function is 1-1.
                            </p>
                        </div>
                    </div>`,
                exp: `
                    <h6 class="text-primary">Engineering Signal Processing</h6>
                    <p>Functions are the backbone of system modeling. <b>Composite functions</b> represent multi-stage filters, while <b>Inverse functions</b> are used to "undo" sensor distortions. 
                    <b>Step functions</b> model sudden switches in electrical circuits (Heaviside step). In control systems, we verify 1-1 mapping to ensure a unique control input results in a unique mechanical output.</p>`,
                prac: `
                <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                    <div class="mb-3">
                        1. If f(x) = x + 2 and g(x) = x², find (g ∘ f)(x).
                        <button class="btn btn-sm btn-dark ms-2" onclick="alert('(x + 2)²')">Show</button>
                    </div>
                    <div class="mb-3">
                        2. Find the inverse of f(x) = 2x - 3.
                        <button class="btn btn-sm btn-dark ms-2" onclick="alert('f⁻¹(x) = (x + 3) / 2')">Show</button>
                    </div>
                    <div class="mb-3">
                        3. (3, 4) ∈ A × B. Does 3 belong to set A?
                        <button class="btn btn-sm btn-dark ms-2" onclick="alert('Yes')">Check</button>
                    </div>
                </div>`
            }
        ]
    },
    physics: {
        title: "Applied Engineering Physics (M.4) - Expanded",
        topics: [
            {
                name: "1. Forces & Friction",
                tut: `
                <div class="mb-2">
                    <strong>Newton's Laws:</strong> ΣF = ma | W = mg<br>
                    <strong>Normal Force (N):</strong>
                    <ul class="ps-3 mb-1">
                        <li>Flat ground: N = mg</li>
                        <li>Inclined plane: N = mg cos(θ)</li>
                    </ul>
                    <strong>Friction (f):</strong> f = μ * N (Static f_s vs Kinetic f_k)<br>
                    <strong>SUVAT Equations:</strong>
                    <ol class="ps-3">
                        <li>v = u + at</li>
                        <li>s = ut + 0.5at²</li>
                        <li>v² = u² + 2as</li>
                        <li>s = (u + v)t / 2</li>
                    </ol>
                </div>`,
                exp: `
                <h6 class="text-primary fw-bold">Engineering Mechanics</h6>
                <p>
                    <strong>Mass vs Weight:</strong> Mass is constant, but weight changes with gravity (g).<br>
                    <strong>Friction:</strong> In engineering, we use 'μ' (coefficient of friction) to determine how much grip a tire has on the road. 
                    If the pushing force (F) is less than the maximum static friction, the object won't move.
                </p>`,
                prac: `
                <div style="font-family: 'Segoe UI', sans-serif;">
                    <div class="mb-3">
                        1. 5kg block, μ_s = 0.5. Find max static friction (g=10): 
                        <button class="btn btn-sm btn-dark ms-2" onclick="alert('25 N')">Show</button>
                    </div>
                    <div class="mb-3">
                        2. A car starts from rest, a=2. Find displacement at t=3 using s = ut + 0.5at²: 
                        <button class="btn btn-sm btn-dark ms-2" onclick="alert('9 m')">Show Result</button>
                    </div>
                </div>`
            },
            {
                name: "2. Projectile Motion",
                tut: `
                <div>
                    <h6 class="text-primary fw-bold">Kinematics Split</h6>
                    
                    <strong>Horizontal (Constant Velocity):</strong>
                    <ul class="ps-3 mb-2">
                        <li>ax = 0 | ux = u cos(θ) | sx = uxt</li>
                    </ul>
                    <strong>Vertical (Constant Acceleration):</strong>
                    <ul class="ps-3 mb-2">
                        <li>ay = g (usually -9.8 or -10 m/s²)</li>
                        <li>uy = u sin(θ)</li>
                        <li>vy = uy + gt</li>
                        <li>sy = uyt + 0.5gt²</li>
                        <li>vy² = uy² + 2gsy</li>
                    </ul>
                    <strong>Key Points:</strong> At Max Height: vy = 0 | At Ground: sy = 0
                </div>`,
                exp: `
                <h6 class="text-primary fw-bold">Ballistics</h6>
                <p>
                    Projectiles move in two dimensions simultaneously. The horizontal speed never changes (ignoring air resistance), 
                    but the vertical speed changes due to gravity.<br>
                    <strong>Engineering Tip:</strong> At the highest point, vertical velocity (v_y) is zero, 
                    but horizontal velocity (v_x) is still active.
                </p>`,
                prac: `
                <div style="font-family: 'Segoe UI', sans-serif;">
                    <div class="mb-3">
                        1. If ux = 15 m/s and air time is 4s, find horizontal range (sx): 
                        <button class="btn btn-sm btn-dark ms-2" onclick="alert('sx = 15 * 4 = 60 m')">Show</button>
                    </div>
                    <div class="mb-3">
                        2. Object thrown up with uy = 20 m/s. Find time to reach max height (g = -10): 
                        <button class="btn btn-sm btn-dark ms-2" onclick="alert('0 = 20 + (-10)t -> t = 2s')">Show Result</button>
                    </div>
                    <div class="mb-3">
                        3. Find vertical displacement (sy) after 1s if uy = 30 m/s and g = -10: 
                        <button class="btn btn-sm btn-dark ms-2" onclick="alert('sy = 30(1) + 0.5(-10)(1)² = 25 m')">Show</button>
                    </div>
                </div>`
            },
            {
                name: "3. Circular Motion",
                tut: `
                <div class="mb-2">
                    <strong>Angular Velocity (ω):</strong> ω = 2π/T = 2πf<br>
                    <strong>Centripetal A:</strong> a_c = v²/r = ω²r<br>
                    <strong>Centripetal F:</strong> F_c = mv²/r = mω²r<br>
                    <strong>Period/Freq:</strong> T = 1/f
                </div>`,
                exp: `
                <h6 class="text-primary fw-bold">Rotational Engineering</h6>
                <p>
                    For an object to move in a circle, a force must always pull it toward the center (Centripetal Force).<br>
                    <strong>Road Design:</strong> Engineers bank roads (tilt them) so that the Normal force helps 
                    provide this center-seeking force, allowing cars to turn safely at high speeds.
                </p>`,
                prac: `
                <div style="font-family: 'Segoe UI', sans-serif;">
                    <div class="mb-3">
                        1. If r = 2m and v = 4m/s, find Centripetal Acceleration (a_c): 
                        <button class="btn btn-sm btn-dark ms-2" onclick="alert('8 m/s²')">Show</button>
                    </div>
                </div>`
            },
            {
                name: "4. Vectors & Components",
                tut: `
                <div class="mb-2">
                    <strong>Resolution:</strong> R_x = R cos(θ) | R_y = R sin(θ)<br>
                    <strong>Unit Vectors:</strong> R = ai + bj<br>
                    <strong>Magnitude:</strong> |R| = √(a² + b²)<br>
                    <strong>Direction:</strong> tan(θ) = b / a
                </div>`,
                exp: `
                <h6 class="text-primary fw-bold">Vector Analysis</h6>
                <p>
                    In engineering, we split forces into 'i' (horizontal) and 'j' (vertical) components to solve complex problems. 
                    The 'Resultant' is the single vector that represents the sum of all individual forces acting on a point.
                </p>`,
                prac: `
                <div style="font-family: 'Segoe UI', sans-serif;">
                    <div class="mb-3">
                        1. Magnitude of vector 3i + 4j: 
                        <button class="btn btn-sm btn-dark ms-2" onclick="alert('5')">Show</button>
                    </div>
                </div>`
            },
            {
                name: "5. Equilibrium & Statics",
                tut: `
                <div class="mb-2">
                    <strong>Conditions for Equilibrium:</strong>
                    <ul class="ps-3 mb-2">
                        <li>Translational: ΣFx = 0, ΣFy = 0</li>
                        <li>Rotational: ΣM (Moment) = 0</li>
                    </ul>
                    <strong>Lami's Theorem:</strong> F1/sin(A) = F2/sin(B) = F3/sin(C)<br>
                    <strong>Moment of Force:</strong> M = F * d (perpendicular distance)<br>
                    <strong>Uniform Beam:</strong> Weight acts at the exact center (L/2).
                </div>`,
                exp: `
                <h6 class="text-primary fw-bold">Structural Engineering</h6>
                <p>
                    <strong>Equilibrium:</strong> An object is in perfect balance when it neither moves nor rotates.<br>
                    <strong>Lami's Theorem:</strong> Used to find Tension in 3 ropes supporting a sign or load.<br>
                    <strong>Uniform Beams:</strong> In bridge design, we assume the beam's weight is a point force at its center of gravity (CG).
                </p>`,
                prac: `
                <div style="font-family: 'Segoe UI', sans-serif;">
                    <div class="mb-3">
                        1. Torque is maximized when the angle between force and lever arm is: 
                        <button class="btn btn-sm btn-dark ms-2" onclick="alert('90 degrees')">Show</button>
                    </div>
                </div>`
            },
            {
                name: "6. Work, Energy & Power",
                tut: `
                <div class="mb-2">
                    <strong>Work (W):</strong> W = F * s * cos(θ)<br>
                    <ul class="ps-3 mb-1">
                        <li>Work by Weight: W = mgh</li>
                        <li>Work by Friction: W = -f * s</li>
                    </ul>
                    <strong>Energy (E):</strong>
                    <ul class="ps-3 mb-1">
                        <li>Kinetic: Ek = 0.5 * m * v²</li>
                        <li>Potential: Ep = mgh</li>
                        <li>Spring Potential: Eps = 0.5 * k * s²</li>
                    </ul>
                    <strong>Power (P):</strong> P = W / t = F * v
                </div>`,
                exp: `
                <h6 class="text-primary fw-bold">Energy Systems</h6>
                <p>
                    <strong>Conservation of Energy:</strong> Total Energy (Ek + Ep + Eps) remains constant if no friction exists.<br>
                    <strong>Power in Engines:</strong> P = Fv is used to calculate the power needed for an elevator (mass M) 
                    to rise at a constant speed against friction (f).
                </p>`,
                prac: `
                <div style="font-family: 'Segoe UI', sans-serif;">
                    <div class="mb-3">
                        1. A 2kg block is lifted 5m. Find Work done by gravity (g=10): 
                        <button class="btn btn-sm btn-dark ms-2" onclick="alert('W = mgh = 2*10*5 = 100 J')">Show</button>
                    </div>
                    <div class="mb-3">
                        2. A motor pulls a load with 50N at 4 m/s. Find Power (P): 
                        <button class="btn btn-sm btn-dark ms-2" onclick="alert('P = Fv = 50*4 = 200 W')">Show Result</button>
                    </div>
                </div>`
            },
            {
                name: "7. Momentum & Impulse",
                tut: `
                <div class="mb-2">
                    <strong>Momentum (p):</strong> p = mv (kg·m/s)<br>
                    <strong>Impulse (I):</strong> I = FΔt = Δp = m(v - u)<br>
                    <strong>Newton's 2nd Law (Force):</strong> F = Δp / Δt<br>
                    <strong>Conservation of Momentum:</strong> Σp_initial = Σp_final
                    <ul class="ps-3 mb-1">
                        <li>m1u1 + m2u2 = m1v1 + m2v2</li>
                    </ul>
                    <strong>Collision Types:</strong>
                    <ul class="ps-3">
                        <li><strong>Elastic:</strong> KE is conserved. (u1 - u2) = (v2 - v1)</li>
                        <li><strong>Inelastic:</strong> KE is lost. Objects may stick (Perfectly Inelastic: v1 = v2).</li>
                        <li><strong>Coefficient of Restitution (e):</strong> e = (v2 - v1) / (u1 - u2)
                            <br><small>(e=1: Elastic | e=0: Perfectly Inelastic)</small>
                        </li>
                    </ul>
                </div>`,
                exp: `
                <h6 class="text-primary fw-bold">Collision Analysis</h6>
                <p>
                    <strong>Elastic:</strong> Both Momentum and Kinetic Energy are conserved. Objects bounce perfectly.<br>
                    <strong>Inelastic:</strong> Momentum is conserved, but KE is lost. If they stick, it is "Perfectly Inelastic."<br><br>
                    <strong>Engineering:</strong> Crumple zones in cars increase the <strong>Time of Impact (Δt)</strong>. 
                    Since I = F * Δt, increasing the time reduces the average Force (F) felt by passengers.
                </p>`,
                prac: `
                <div style="font-family: 'Segoe UI', sans-serif;">
                    <div class="mb-3">
                        1. A 2kg ball at 5m/s hits a wall and stops in 0.1s. Find Force (F): 
                        <button class="btn btn-sm btn-dark ms-2" onclick="alert('100 N')">Show</button>
                    </div>
                    <div class="mb-3">
                        2. In an elastic collision, if u1=5, v1=2, u2=1, find v2: 
                        <button class="btn btn-sm btn-dark ms-2" onclick="alert('4 (using u1+v1 = u2+v2)')">Show</button>
                    </div>
                </div>`
            }
        ]
    },
    coding: {
        title: "Applied Computer Science: Python",
        topics: [
            {
                name: "1. Variables & Strings",
                tut: `
                <b>Assignment:</b> Use <code>=</code> to store values.<br>
                <pre class="bg-dark text-white p-2 rounded small">
name = "Sensor_A"  # String (str)
voltage = 220      # Integer (int)
ratio = 1.5        # Floating point (float)
is_active = True   # Boolean (bool)</pre>
                <b>String Formatting:</b> Use f-strings for clean output.<br>
                <code>print(f"{name} is at {voltage}V")</code>`,
                exp: `
                <h6 class="text-primary">Engineering Usage</h6>
                <p>Strings are often used to parse data from hardware. If a sensor sends <code>"TEMP:25.5"</code>, we use <b>slicing</b> (<code>data[5:]</code>) to extract the numeric part and <code>float()</code> to convert it for math calculations.</p>`,
                prac: `
                1. What does <code>print("Hi" * 3)</code> output? <button class="btn btn-sm btn-dark" onclick="alert('HiHiHi')">Show</button>`
            },
            {
                name: "2. Data Structures",
                tut: `
                <b>List:</b> <code>vals = [10, 20, 30]</code> (Mutable)<br>
                <b>Tuple:</b> <code>coords = (13.5, 100.2)</code> (Immutable)<br>
                <b>Dictionary:</b> Mapping keys to values.<br>
                <pre class="bg-dark text-white p-2 rounded small">
motor = {
    "rpm": 3000,
    "status": "OK"
}
print(motor["rpm"]) # Output: 3000</pre>`,
                exp: `
                <h6 class="text-primary">Data Organization</h6>
                <p>Use <b>Lists</b> for logs and <b>Dictionaries</b> for configuration files. In Python, dictionaries are highly optimized for fast lookups, making them ideal for managing large sets of system parameters.</p>
                `,
                prac: `
                1. Add 40 to <code>vals</code>: <code>vals.____(40)</code> <input id='ds1' class='form-control-sm'><button onclick="checkAns('ds1','append')">Check</button>`
            },
            {
                name: "3. Conditionals & Logic",
                tut: `
                <b>Syntax:</b> Use colons (:) and indentation.<br>
                <pre class="bg-dark text-white p-2 rounded small">
if temp > 100:
    print("Danger: Overheat")
elif temp > 80:
    print("Warning: High Temp")
else:
    print("Normal Operation")</pre>`,
                exp: `
                <h6 class="text-primary">Safety Logic</h6>
                <p>Conditionals represent the "Decision Gates" in an algorithm. In industrial automation, these <code>if/else</code> structures form the basic safety interlocks that prevent machines from operating under unsafe conditions.</p>`,
                prac: `
                1. Logic for "not equal to": <button class="btn btn-sm btn-dark" onclick="alert('!=')">Show</button>`
            },
            {
                name: "4. Functions & Scope",
                tut: `
                <b>Definition:</b> Wrap reusable logic in a function.<br>
                <pre class="bg-dark text-white p-2 rounded small">
def calc_area(radius):
    pi = 3.14159
    return pi * (radius ** 2)

# Calling the function
result = calc_area(5) # Returns 78.53...</pre>`,
                exp: `
                <h6 class="text-primary">The Power of Return</h6>
                <p>Functions allow you to isolate math operations. In the example above, <code>radius ** 2</code> calculates <b>radius²</b>. By using <code>return</code>, the function provides a result that can be used in further calculations.</p>
                `,
                prac: `
                1. What keyword starts a function definition? <input id='fn1' class='form-control-sm'><button onclick="checkAns('fn1','def')">Check</button>`
            },
            {
                name: "5. Modules & Math",
                tut: `
                <b>Importing:</b> Access built-in engineering tools.<br>
                <pre class="bg-dark text-white p-2 rounded small">
import math

val = math.sqrt(16) # Calculates √16
pwr = math.pow(2, 3) # Calculates 2³
print(math.sin(math.radians(90))) # Trig functions</pre>`,
                exp: `
                <h6 class="text-primary">Standard Libraries</h6>
                <p>Python's <code>math</code> module is essential for engineering. 
                - <code>math.sqrt(x)</code> is used for calculating <b>√x</b>.
                - <code>math.pow(x, y)</code> is used for <b>xʸ</b>.
                For heavy data analysis, engineers typically move from the standard library to <b>NumPy</b>.</p>`,
                prac: `
                1. How to get the value of π? <button class="btn btn-sm btn-dark" onclick="alert('math.pi')">Show</button>`
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






