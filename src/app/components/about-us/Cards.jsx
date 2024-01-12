"use client";

const presentationsData = [
  {
    id: 1,
    imgSrc: 'data:image/png;base64,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',
    name: 'Nombre Persona 1',
    profession: 'Profesión 1',
    description: 'Breve descripción sobre la Persona 1.',
  },
  {
    id: 2,
    imgSrc: 'data:image/png;base64,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',
    name: 'Nombre Persona 2',
    profession: 'Profesión 2',
    description: 'Breve descripción sobre la Persona 2.',
  },
  {
    id: 3,
    imgSrc: 'data:image/png;base64,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',
    name: 'Nombre Persona 3',
    profession: 'Profesión 3',
    description: 'Breve descripción sobre la Persona 3.',
  },
];

const Cards = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-zinc-800">
      <div className="grid gap-8 grid-row-1 md:grid-cols-3">
        {presentationsData.map((person) => (
          <div key={person.id} className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md">
            <img className="mx-auto mt-8 rounded-full" src={person.imgSrc} alt="foto"/>
            <div className="mt-4 text-center">
              <h1 className="text-xl font-semibold">{person.name}</h1>
              <p className="text-gray-600">{person.profession}</p>
              <p className="mt-2 text-gray-700">{person.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;