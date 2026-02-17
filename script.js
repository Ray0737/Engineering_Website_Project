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
                    1. If A = {1, 2} and B = {2, 3}, what is A ∩ B? <button class="btn btn-sm btn-dark" onclick="alert('{2}')">Show</button><br>
                    2. How many subsets does a set with 3 elements have? <button class="btn btn-sm btn-dark" onclick="alert('2³ = 8')">Show Result</button><br>
                    3. If A ⊂ B, what is A ∩ B? <button class="btn btn-sm btn-dark" onclick="alert('A')">Show</button>`
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
                prac: "If we have (p → q) and ~q, what can we conclude? <br><button class='btn btn-dark btn-sm mt-2' onclick='alert(\"Correct! That is Modus Tollens (~p).\")'>~p</button> <button class='btn btn-dark btn-sm mt-2' onclick='alert(\"Incorrect. Try Modus Tollens.\")'>~q</button>"
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
                    1. If (x - 2) is a factor of 2x³ + ax² + bx + 12, what is P(2)? <button class="btn btn-sm btn-dark" onclick="alert('0')">Show</button><br>
                    2. Solve |x + 3| < 4: <button class="btn btn-sm btn-dark" onclick="alert('-7 < x < 1')">Show Interval</button><br>
                    3. Simplify (x - 2)² - 25 = 0: <button class="btn btn-sm btn-dark" onclick="alert('x = 7, -3')">Show Roots</button><br>
                    4. What is the identity of operation a*b = ab/2? <button class="btn btn-sm btn-dark" onclick="alert('e = 2')">Show</button>`
            }
            ,
            {
                name: "Analytic Geometry: Linear Relationships",
                tut: "<b>Geometric Constraints:</b><br>• <b>Distance (d):</b> √((x₂ - x₁)² + (y₂ - y₁)²).<br>• <b>Parallel Lines:</b> m₁ = m₂.<br>• <b>Perpendicular Lines:</b> m₁ · m₂ = -1.<br>• <b>Distance Point to Line:</b> d = |Ax₁ + By₁ + C| / √(A² + B²).",
                exp: "<b>Engineering Detail:</b> To find the equation of a line parallel to 5x - 12y + 3 = 0 that is exactly 3 units from a point, we use the distance formula with an unknown constant 'C'. This is used in autonomous navigation to maintain a 'safety buffer' distance from a detected boundary line.",
                prac: "Find the distance between (4,3) and (-2,5). <br><input id='geoans' class='form-control mt-2' placeholder='√n'><button class='btn btn-dark mt-2' onclick='checkAns(\"geoans\", \"√40\")'>Check</button>"
            },
            {
                name: "Conic Sections Master Reference",
                tut: `
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
                                <img src="pic/parabola_graph.png" class="img-fluid rounded mb-3" alt="Parabola Graph">
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
                                <li><b>Sum of Distances:</b> If PF₁ + PF₂ = Constant, the locus is an <b>Ellipse</b>.</li>
                                <li><b>Difference of Distances:</b> If |PF₁ - PF₂| = Constant, the locus is a <b>Hyperbola</b>.</li>
                                <li><b>Equidistance:</b> If PF = PL, the locus is a <b>Parabola</b>.</li>
                            </ul>
                            
                            <p class="small text-muted"><i>Note: In your M.4 Review, if the constant sum is less than the distance between foci, no real locus exists (Empty Set).</i></p>
                        </div>
                    </div>`,
                prac: "<b>Task:</b> Convert x² + y² - 4x + 6y - 3 = 0. <br><button onclick='alert(\"Center: (2, -3), Radius: √(2² + (-3)² - (-3)) = √16 = 4\")'>Show Result</button>"
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
                                <li><b>Quadratic:</b> f(x) = ax² + bx + c</li>
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
                    1. If f(x) = x + 2 and g(x) = x², find (g ∘ f)(x): <button class="btn btn-sm btn-dark" onclick="alert('(x + 2)²')">Show</button><br>
                    2. Find inverse of f(x) = 2x - 3: <button class="btn btn-sm btn-dark" onclick="alert('f⁻¹(x) = (x + 3) / 2')">Show</button><br>
                    3. Domain of f(x) = 1/√(x - 1): <button class="btn btn-sm btn-dark" onclick="alert('x > 1')">Show</button><br>
                    4. (3, 4) ∈ A × B. Does 3 belong to set A? <button class="btn btn-sm btn-dark" onclick="alert('Yes')">Yes</button>`
            }
        ]
    },
    physics: {
        title: "Applied Engineering Physics (M.4) - Expanded",
        topics: [
            {
                name: "1. Forces & Friction (แรงและแรงเสียดทาน)",
                tut: `
                <b>Newton's Laws:</b> ΣF = ma | W = mg<br>
                <b>Normal Force (N):</b> The force from a surface pushing back. 
                - On flat ground: N = mg
                - On inclined plane: N = mg cos(θ)<br>
                <b>Friction (f):</b> f = μ * N
                - Static (f_s): Acts when object is still. max f_s = μ_s * N
                - Kinetic (f_k): Acts when object is sliding. f_k = μ_k * N<br>
                <b>The 5 Kinematic Equations (SUVAT):</b><br>
                <ol class="small">
                    <li><b>v = u + at</b> (Missing s)</li>
                    <li><b>s = ut + ½at²</b> (Missing v)</li>
                    <li><b>v² = u² + 2as</b> (Missing t)</li>
                    <li><b>s = ½(u + v)t</b> (Missing a)</li>
                    <li><b>s = vt - ½at²</b> (Missing u)</li>
                </ol>
                <b>Variables:</b> s = displacement, u = initial velocity, v = final velocity, a = acceleration, t = time.`,
                exp: `
                <h6 class="text-primary">Engineering Mechanics</h6>
                <p><b>Mass vs Weight:</b> Mass is constant, but weight changes with gravity (g). 
                <b>Friction:</b> In engineering, we use 'μ' (coefficient of friction) to determine how much grip a tire has on the road. 
                If the pushing force (F) is less than the maximum static friction, the object won't move. </p>
                `,
                prac: `
                1. 5kg block, μ_s = 0.5. Find max static friction (g=10): <input id='f1' class='form-control-sm'><button onclick="checkAns('f1','25')">Check</button><br>
                2. If you push with 10N but max friction is 25N, does it move? <button class="btn btn-sm btn-dark" onclick="alert('No')">No</button><br>
                3. A 2000kg car has 4000N force. Find acceleration (a): <input id='f3' class='form-control-sm'><button onclick="checkAns('f3','2')">Check</button>`
            },
            {
                name: "2. Projectile Motion (โพรเจกไทล์)",
                tut: `
                <b>Horizontal (ax = 0):</b> v_x = u_x | s_x = u_x * t<br>
                <b>Vertical (ay = g):</b> v_y = u_y + gt | s_y = u_y*t + 0.5*g*t² | v_y² = u_y² + 2gs_y<br>
                <b>Initial Velocity:</b> u_x = u cos(θ) | u_y = u sin(θ)`,
                exp: `
                <h6 class="text-primary">Ballistics</h6>
                <p>Projectiles move in two dimensions simultaneously. The horizontal speed never changes (air resistance ignored), but the vertical speed changes due to gravity. 
                <b>Engineering Tip:</b> At the highest point, vertical velocity (v_y) is zero, but horizontal velocity (v_x) is still active.</p>
                `,
                prac: `
                1. Ball kicked at 10m/s horizontally from 80m cliff. Time to hit ground (g=10): <input id='p1' class='form-control-sm'><button onclick="checkAns('p1','4')">Check</button><br>
                2. How far (s_x) does it travel in that time? <input id='p2' class='form-control-sm'><button onclick="checkAns('p2','40')">Check</button><br>
                3. At max height, what is the vertical velocity? <input id='p3' class='form-control-sm'><button onclick="checkAns('p3','0')">Check</button>`
            },
            {
                name: "3. Circular Motion (การเคลื่อนที่แบบวงกลม)",
                tut: `
                <b>Centripetal Acceleration:</b> a_c = v² / r<br>
                <b>Centripetal Force:</b> F_c = (m * v²) / r<br>
                <b>Period (T):</b> Time for 1 round | <b>Frequency (f):</b> rounds per second (f = 1/T)`,
                exp: `
                <h6 class="text-primary">Rotational Engineering</h6>
                <p>For an object to move in a circle, a force must always pull it toward the center (Centripetal Force). 
                <b>Road Design:</b> Engineers bank roads (tilt them) so that the Normal force helps provide this center-seeking force, allowing cars to turn safely at high speeds.</p>
                `,
                prac: `
                1. Car m=1000kg, v=20m/s, r=40m. Find F_c: <input id='c1' class='form-control-sm'><button onclick="checkAns('c1','10000')">Check</button><br>
                2. If the string breaks, which way does the ball go? <button class="btn btn-sm btn-dark" onclick="alert('Straight line/Tangent')">Tangent</button><br>
                3. Find frequency (f) if Period (T) is 0.5s: <input id='c3' class='form-control-sm'><button onclick="checkAns('c3','2')">Check</button>`
            },
            {
                name: "4. Vectors & Components (เวกเตอร์)",
                tut: `
                <b>Resolution:</b> R_x = R cos(θ) | R_y = R sin(θ)<br>
                <b>Unit Vectors:</b> R = ai + bj<br>
                <b>Magnitude:</b> |R| = √(a² + b²)<br>
                <b>Direction:</b> tan(θ) = b / a`,
                exp: `
                <h6 class="text-primary">Vector Analysis</h6>
                <p>In engineering, we split forces into 'i' (horizontal) and 'j' (vertical) components to solve complex problems.  
                The 'Resultant' is the single vector that represents the sum of all individual forces acting on a point.</p>
                `,
                prac: `
                1. Vector R = 3i + 4j. Find magnitude: <input id='v1' class='form-control-sm'><button onclick="checkAns('v1','5')">Check</button><br>
                2. Force 20N at 30 degrees. Find horizontal force (cos30=0.866): <input id='v2' class='form-control-sm'><button onclick="checkAns('v2','17.32')">Check</button><br>
                3. Direction of 5i + 5j in degrees: <input id='v3' class='form-control-sm'><button onclick="checkAns('v3','45')">Check</button>`
            },
            {
                name: "5. Equilibrium & Statics (สมดุลกล)",
                tut: `
                <b>Conditions for Equilibrium:</b><br>
                1. Translational: ΣFx = 0, ΣFy = 0<br>
                2. Rotational: ΣM (Moment) = 0<br>
                <b>Lami's Theorem:</b> F1/sin(A) = F2/sin(B) = F3/sin(C)<br>
                <b>Moment of Force (โมเมนต์):</b> M = F * d (perpendicular distance)<br>
                <b>Uniform Beam:</b> Weight acts at the exact center (L/2).`,
                exp: `
                <h6 class="text-primary">Structural Engineering</h6>
                <p><b>Equilibrium:</b> An object is in perfect balance when it neither moves nor rotates. 
                <b>Lami's Theorem:</b> Used to find Tension in 3 ropes supporting a sign or load. 
                <b>Uniform Beams:</b> In bridge design, we assume the beam's weight is a point force at its center of gravity (CG).</p>
                `,
                prac: `
                1. 3 forces in balance, angles are 120 deg. If F1 = 15N, find F2: <input id='e1' class='form-control-sm'><button onclick="checkAns('e1','15')">Check</button><br>
                2. A uniform 6m beam weighs 200N. Find the Moment at the left support: <input id='e2' class='form-control-sm'><button onclick="checkAns('e2','600')">Check</button><br>
                3. Torque is max when the angle between force and arm is: <button class="btn btn-sm btn-dark" onclick="alert('90 degrees')">90 deg</button>`
            },
            {
                name: "6. Work, Energy & Power (งานและพลังงาน)",
                tut: `
                <b>Work (W):</b> W = F * s * cos(θ)<br>
                - Work by Weight: W = mgh<br>
                - Work by Friction: W = -f * s<br>
                <b>Energy (E):</b><br>
                - Kinetic: Ek = 0.5 * m * v²<br>
                - Potential: Ep = mgh<br>
                - Spring Potential: Eps = 0.5 * k * s²<br>
                <b>Power (P):</b> P = W / t = F * v`,
                exp: `
                <h6 class="text-primary">Energy Systems</h6>
                <p><b>Conservation of Energy:</b> Total Energy (Ek + Ep + Eps) remains constant if no friction exists. 
                <b>Power in Engines:</b> P = Fv is used to calculate the power needed for an elevator (mass M) to rise at a constant speed against friction (f).</p>
                `,
                prac: `
                1. 2kg block pushed with 20N for 5m. Find Work (W): <input id='w1' class='form-control-sm'><button onclick="checkAns('w1','100')">Check</button><br>
                2. Elevator mass 2000kg rises at 4m/s. Power required (g=10, ignore friction): <input id='w2' class='form-control-sm'><button onclick="checkAns('w2','80000')">Check</button><br>
                3. Compressed spring (k=100) by 0.2m. Find Eps: <input id='w3' class='form-control-sm'><button onclick="checkAns('w3','2')">Check</button>`
            },
            {
                name: "7. Momentum & Impulse (โมเมนตัมและแรงดล)",
                tut: `
                <b>Momentum (p):</b> p = m * v (Unit: kg·m/s)<br>
                <b>Impulse (I or Δp):</b> I = F * Δt = Δp = m(v - u)<br>
                <b>Newton's Second Law (Vector Form):</b> F = dp/dt<br>
                <b>In engineering simulations:</b> Force = change_in_momentum / time_step<br>
                <b>Conservation of Momentum:</b> Σp_before = Σp_after<br>
                <i>m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂</i>`,
                exp: `
                <h6 class="text-primary">Collision Analysis</h6>
                <p><b>Elastic Collisions:</b> Both Momentum and Kinetic Energy are conserved. Objects bounce perfectly.</p>
                <p><b>Inelastic Collisions:</b> Momentum is conserved, but Kinetic Energy is lost (converted to heat/sound). If they stick together, it is "Perfectly Inelastic."</p>
                
                <p><b>Engineering Application:</b> Crumple zones in cars are designed to increase the <b>Time of Impact (Δt)</b>. Since I = F * Δt, increasing the time reduces the average Force (F) felt by the passengers.</p>`,
                prac: `
                1. 2kg ball at 5m/s hits a wall and stops in 0.1s. Find Force (F): <input id='m1' class='form-control-sm'><button onclick="checkAns('m1','100')">Check</button><br>
                2. A 1000kg car at 20m/s has what momentum? <input id='m2' class='form-control-sm'><button onclick="checkAns('m2','20000')">Check</button><br>
                3. If two objects stick together after colliding, what is conserved? <button class="btn btn-sm btn-dark" onclick="alert('Momentum only')">Show Answer</button>`
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
