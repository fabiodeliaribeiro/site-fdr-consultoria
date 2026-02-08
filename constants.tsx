
import { Service, Stat, Segment, BlogPost } from './types';

export const SERVICES: Service[] = [
  {
    id: 'assessoria-mensal',
    title: 'Assessoria Mensal',
    description: 'Acompanhamento contínuo e estratégico para maximizar suas chances de sucesso em múltiplos processos licitatórios.',
    icon: 'calendar_month',
    forWhom: 'Empresas que desejam fazer do governo um cliente recorrente.',
    includes: ['Busca diária de editais', 'Análise de risco jurídica', 'Cadastro e manutenção no SICAF'],
    cta: 'Solicitar Proposta'
  },
  {
    id: 'assessoria-pontual',
    title: 'Assessoria por Edital',
    description: 'Suporte especializado focado em uma oportunidade específica, do início ao fim do certame.',
    icon: 'description',
    forWhom: 'Empresas que identificaram uma oportunidade única e precisam de expertise.',
    includes: ['Análise minuciosa do Edital', 'Montagem da documentação', 'Participação no pregão eletrônico'],
    cta: 'Cotar Serviço'
  },
  {
    id: 'recursos',
    title: 'Recursos e Impugnações',
    description: 'Defesa técnica e jurídica dos seus direitos em processos licitatórios com irregularidades ou inabilitações.',
    icon: 'gavel',
    forWhom: 'Licitantes que foram prejudicados por decisões administrativas.',
    includes: ['Elaboração de peças jurídicas', 'Impugnação de editais viciados', 'Contrarrazões a recursos'],
    cta: 'Falar com Advogado'
  },
  {
    id: 'compliance',
    title: 'Compliance em Licitações',
    description: 'Estruturação de processos internos para garantir conformidade com a Lei de Licitações e prevenir riscos.',
    icon: 'verified_user',
    forWhom: 'Empresas que buscam governança corporativa e segurança jurídica.',
    includes: ['Auditoria de processos atuais', 'Treinamento de equipes', 'Criação de código de ética'],
    cta: 'Consultar Especialista'
  }
];

export const STATS: Stat[] = [
  { value: '+75', label: 'Licitações Vencidas' },
  { value: '+R$ 230M', label: 'Em Licitações Vencidas' },
  { value: '+98%', label: 'Taxa de Aprovação' }
];

export const SEGMENTS: Segment[] = [
  { name: 'Saúde e Hospitalar', icon: 'medical_services' },
  { name: 'Engenharia e Obras', icon: 'engineering' },
  { name: 'Tecnologia e TI', icon: 'computer' },
  { name: 'Serviços Gerais', icon: 'cleaning_services' }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Dominando a Preparação de Documentos para Editais Públicos',
    excerpt: 'Documentação incorreta é o motivo nº 1 para desqualificação. Aprenda nosso sistema de checklist proprietário.',
    author: 'Dr. Fernando Rocha',
    role: 'CEO & Especialista',
    readTime: '5 min',
    category: 'Estratégia',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Alterações Jurídicas na Lei de Licitações 2024',
    excerpt: 'Entenda como a nova regulamentação impacta suas oportunidades de negócio este ano.',
    author: 'Dra. Mariana Silva',
    role: 'Consultora Jurídica',
    readTime: '8 min',
    category: 'Jurídico',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80'
  }
];
