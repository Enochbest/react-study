// function Head({ count }) {
//   return (
//     <div>
//       {/* Head */}
//       Hello Head
//       {count}
//     </div>
//   );
// }

// function Welcome({ children }) {
//   return (
//     <div>
//       {/* Welcome */}
//       Hello Welcome
//       {children ?? null}
//     </div>
//   );
// }

// function App() {
//   const count = 123;
//   return (
//     <div>
//       {/* App */}
//       Hello App
//       <Welcome>
//         <Head count={count}></Head>
//       </Welcome>
//     </div>
//   );
// }

// export default App;

// function Head({ count }) {
//   return (
//     <div>
//       {/* Head */}
//       Hello Head
//       {count}
//     </div>
//   );
// }

// function Welcome() {
//   const count = 456;
//   return (
//     <div>
//       {/* Welcome */}
//       Hello Welcome
//       <Head count={count}></Head>
//     </div>
//   );
// }

// function App() {
//   const count = 123;
//   return (
//     <div>
//       {/* App */}
//       Hello App
//       <Welcome></Welcome>
//     </div>
//   );
// }

// export default App;

//插槽定位
function Head({ count }) {
  return (
    <div>
      {/* Head */}
      Hello Head
      {count}
    </div>
  );
}

function Welcome({ top, bottom }) {
  return (
    <div>
      {/* Welcome */}
      {top}
      Hello Welcome
      {bottom}
    </div>
  );
}

function App() {
  const count1 = 123;
  const count2 = 456;
  return (
    <div>
      {/* App */}
      Hello App
      <Welcome
        top={<Head count={count1}></Head>}
        bottom={<Head count={count2}></Head>}
      ></Welcome>
    </div>
  );
}

export default App;
