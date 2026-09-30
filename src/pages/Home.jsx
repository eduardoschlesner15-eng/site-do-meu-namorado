import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float, MeshDistortMaterial, Center, useGLTF } from '@react-three/drei';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function HandModel() {
  const meshRef = useRef();
  // Carregando o GLB da pasta public
  const { scene } = useGLTF('/hand.glb');
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Center>
        <primitive 
          ref={meshRef} 
          object={scene} 
          scale={0.05} // Ajuste a escala caso fique muito grande
          rotation={[-Math.PI / 2, 0, 0]} 
        />
      </Center>
    </Float>
  );
}

const products = [
  { id: 1, name: 'Cyber Jacket', price: 'R$ 299', desc: 'Design futurista com leds embutidos e material térmico.' },
  { id: 2, name: 'Neon Sneakers', price: 'R$ 499', desc: 'Sola translúcida com iluminação reativa ao pisar.' },
  { id: 3, name: 'Holo Visor', price: 'R$ 199', desc: 'Óculos com display HUD e proteção UV avançada.' },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section with 3D Background */}
      <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} color="#00f3ff" intensity={2} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Suspense fallback={null}>
              <HandModel />
            </Suspense>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl glass p-10 rounded-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
            Descubra o <span className="text-gradient">Futuro</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Experiência imersiva em estilo e tecnologia.
          </p>
          <Link to="/shop" className="inline-flex items-center gap-2 bg-neon-purple hover:bg-neon-blue text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(176,38,255,0.4)] hover:shadow-[0_0_30px_rgba(0,243,255,0.6)]">
            Explorar Coleção <ArrowRight />
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-6 md:px-12 bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            Destaques da <span className="text-neon-blue">Semana</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map(product => (
              <div key={product.id} className="glass rounded-2xl p-6 group hover:border-neon-blue transition-all duration-300">
                <div className="h-48 w-full bg-dark-700 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                   <div className="w-24 h-24 bg-gradient-to-tr from-neon-purple to-neon-blue rounded-full opacity-50 blur-xl group-hover:opacity-80 transition-opacity"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-400 mb-4 h-12">{product.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-neon-blue">{product.price}</span>
                  <button className="text-sm border border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white px-4 py-2 rounded-full transition-colors">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
