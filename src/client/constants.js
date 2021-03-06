// API Constants values
export const Categories = {
  lesao_corporal_seguida_de_morte: "Lesão Corporal Seguida de Morte",
  latrocinio: "Latrocínio",
  morte_acidental: "Morte Acidental",
  cadaver_sem_lesoes: "Cadáver Sem Lesões",
  suicidio_duvidoso: "Suicídio Duvidoso",
  homicidio_doloso: "Homicídio Doloso",
  oposicao_policial: "Oposição Policial",
  morte_subita_natural: "Morte Súbita Natural"
};

export const CategoryIcon = {
  lesao_corporal_seguida_de_morte: 'sword',
  latrocinio: 'burglar',
  morte_acidental: 'man-falling-off-a-precipice',
  cadaver_sem_lesoes: 'photo',
  suicidio_duvidoso: 'rope',
  homicidio_doloso: 'blaster',
  oposicao_policial: 'police',
  morte_subita_natural: 'grave'
};

export const CategoryColor = {
  LESAO_CORPORAL_SEGUIDA_DE_MORTE: '__pink',
  LATROCINIO: '__orange',
  MORTE_ACIDENTAL: '__blue',
  CADAVER_SEM_LESOES: '__green',
  SUICIDIO_DUVIDOSO: '__brown',
  HOMICIDIO_DOLOSO: '__red',
  OPOSICAO_POLICIAL: '__purple',
  MORTE_SUBITA_NATURAL: '__yellow'
};

export const Genders = {
  masculino: 'Masculino',
  feminino: 'Feminino'
};

export const SkinColors = [
  'Vermelha',
  'Parda',
  'Preta',
  'Amarela',
  'Branca',
  'Outros'
];

export const Educations = [
  'Analfabeto',
  '1 Grau incompleto',
  '1 Grau completo',
  '2 Grau incompleto',
  '2 Grau completo',
  'Superior incompleto',
  'Superior completo'
];

// Field types
export const FIELD_TEXT = 'text';
export const FIELD_SELECT = 'select';
export const FIELD_NUMERIC = 'numeric';

// Search
export const SearchTypes = {
  name: {
    label: 'Nome',
    type: FIELD_TEXT
  },

  idReport: {
    label: 'Cód. BO',
    type: FIELD_TEXT
  },

  year: {
    label: 'Ano',
    type: FIELD_NUMERIC,
    minValue: 2013,
    maxValue: 2015
  },

  personId: {
    label: 'RG',
    type: FIELD_TEXT
  },

  category: {
    label: 'Categoria',
    type: FIELD_SELECT,
    defaultValue: Categories.lesao_corporal_seguida_de_morte,
    values: Categories
  },

  gender: {
    label: 'Gênero',
    type: FIELD_SELECT,
    defaultValue: Genders.masculino,
    values: Genders
  },

  age: {
    label: 'Idade',
    type: FIELD_NUMERIC,
    minValue: 18,
    maxValue: 130
  },

  skin: {
    label: 'Cor da Pele',
    type: FIELD_SELECT,
    defaultValue: SkinColors[0],
    values: SkinColors
  },

  education: {
    label: 'Escolaridade',
    type: FIELD_SELECT,
    defaultValue: Educations[0],
    values: Educations
  }
};

export const ReportTypes = {
  COLLECTION: 'COLLECTION',
  SINGLE: 'SINGLE'
};
