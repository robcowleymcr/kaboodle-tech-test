import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from "./Form";
import Events from "./Events";
import { useEffect } from 'react';

function App() {
  
  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Events />} />
              <Route path="create" element={<Form />} />
            </Routes>
          </BrowserRouter>
        </div>
      </header>
    </div>
  );
}

export default App;










// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Form />}>
//           {/* <Route index element={<Home />} /> */}
//           {/* <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} /> */}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
