import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home'
import { Aseven } from '../pages/Aseven';
import { Asix } from '../pages/Asix';
import { Afive } from '../pages/Afive';
import { Afour } from '../pages/Afour';
import { Athree } from '../pages/Athree';
import { Atwo } from '../pages/Atwo';
import { A } from '../pages/A';
import { B } from '../pages/B';
import { C } from '../pages/C';
import { D } from '../pages/D';
import { E } from '../pages/E';
import { F } from '../pages/F';
import { G } from '../pages/G';
import { H } from '../pages/H';
import { I } from '../pages/I';
import { J } from '../pages/J';
import { K } from '../pages/K';
import { L } from '../pages/L';
import { M } from '../pages/M';
import { N } from '../pages/N';
import { O } from '../pages/O';

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aseven" element={<Aseven />} />
            <Route path="/asix" element={<Asix />} />
            <Route path="/afive" element={<Afive />} />
            <Route path="/afour" element={<Afour />} />
            <Route path="/athree" element={<Athree />} />
            <Route path="/atwo" element={<Atwo />} />
            <Route path="/a" element={<A />} />
            <Route path="/b" element={<B />} />
            <Route path="/c" element={<C />} />
            <Route path="/d" element={<D />} />
            <Route path="/e" element={<E />} />
            <Route path="/f" element={<F />} />
            <Route path="/g" element={<G />} />
            <Route path="/h" element={<H />} />
            <Route path="/i" element={<I />} />
            <Route path="/j" element={<J />} />
            <Route path="/k" element={<K />} />
            <Route path="/l" element={<L />} />
            <Route path="/m" element={<M />} />
            <Route path="/n" element={<N />} />
            <Route path="/o" element={<O />} />
        </Routes>
    )
}