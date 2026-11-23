// Metadados do projeto compartilhados pela documentação (index.html) e pelo visualizador (visualizador.html).
// Categorias e nomes legíveis dos corpos da montagem (chave = nome do corpo no STEP).
export const CATS = {
  madeira:   { nome: 'Estrutura em madeira',  cor: '#c8a36a' },
  pecas:     { nome: 'Peças de fabricação',   cor: '#3f83c9' },
  elevador:  { nome: 'Elevador de bolinha',   cor: '#e2862f' },
  lancador:  { nome: 'Lançador',              cor: '#8a5fd1' },
  eletro:    { nome: 'Eletrônica e sensores', cor: '#2aa57c' },
  bola:      { nome: 'Bolinha',               cor: '#b9c0c8' },
  outros:    { nome: 'Outros corpos',         cor: '#8b96a1' },
};
export const COMP = {
  'corpo_20': ['madeira', 'Base'], 'madeira': ['madeira', 'Frente'], 'Tampo_madeira': ['madeira', 'Tampo de jogo'],
  'Extensao_lancador_madeira': ['madeira', 'Extensão do lançador'],
  '1.1': ['pecas', 'Borda esquerda', 'BORDA_EQUERDA'], 'corpo_31': ['pecas', 'Borda direita', 'BORDA_DIRETA'],
  '1.7.6': ['pecas', 'Canaleta de coleta', 'CANALETA_DE_COLETA'], '1.2': ['pecas', 'Ponte do tiro', 'PONTE_DO_TIRO'],
  'Coluna_F_dir': ['pecas', 'Pé direito P', 'PE_DIREITO_P'], 'Coluna_F_esq': ['pecas', 'Pé esquerdo P', 'PE_ESQUERDA_P'],
  'Coluna_T1': ['pecas', 'Pé direito M', 'PE_DIRETO_M'], 'Coluna_T3': ['pecas', 'Pé esquerdo M', 'PE_ESQUERDO_M'],
  'Coluna_T2': ['pecas', 'Pé grande', 'PE_GRANDE'],
  'copo_transporte': ['elevador', 'Copo inferior', 'COPO_INFERIOR_ELEVADOR'], 'novo_elevador': ['elevador', 'Copo superior', 'COPO_SUPERIOR_ELEVADOR'],
  'Fuso': ['elevador', 'Fuso', 'FUSO'],
  'Lancador_anel_trava': ['lancador', 'Anel trava'], 'Lancador_haste': ['lancador', 'Haste'], 'Lancador_mola': ['lancador', 'Mola'],
  'Lancador_placa': ['lancador', 'Placa'], 'Lancador_ponta_borracha': ['lancador', 'Ponta de borracha'], 'Lancador_puxador': ['lancador', 'Puxador'],
  'Comporta': ['eletro', 'Comporta'], 'Berco_solenoide': ['eletro', 'Berço do solenoide'],
  'JF-0530B_referencia': ['eletro', 'Solenoide JF-0530B (comporta)'], 'Solenoide_espera_JF-0530B': ['eletro', 'Solenoide JF-0530B (espera)'],
  'LED_IR_3mm_emissor': ['eletro', 'LED IR 3 mm emissor'], 'IR_receptor_posicao_tiro': ['eletro', 'Receptor IR — posição de tiro'],
  'IR_emissor_vitoria': ['eletro', 'Emissor IR — vitória'], 'IR_receptor_vitoria': ['eletro', 'Receptor IR — vitória'],
  'Bolinha_espera': ['bola', 'Bolinha em espera'],
};
export const PART_LABEL = Object.fromEntries(Object.values(COMP).filter((c) => c[2]).map((c) => [c[2], c[1]]));

// Categoria, nome legível e peça ligada de um corpo da montagem.
export function metaOf(nome) {
  return COMP[nome] ?? ['outros', nome.startsWith('corpo_') ? 'Superfície auxiliar' : 'Corpo ' + nome];
}
