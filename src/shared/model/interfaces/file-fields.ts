export interface ISuapFields {
	nome: string;
	campus: string;
	curso: string;
	situacaoCurso: string;
	situacaoUltimoPeriodo: string;
	nivelEnsino: string;
	modalidade: string;
	codigoEMEC: string;
	anoIngresso: string;
	periodoIngresso: string;
	anoConclusao: string;
	cpf: string;
	cotaMEC: string;
	cotaSISTEC: string;
	dataMatricula: string;
	dataConclusao: string;
	turno: string;
	vinculo: string;
	diariosMatriculasUltimoPeriodo: string
}

export interface ISistecFields {
	cpf: string;
	nomeResponsavel: string;
	uf: string;
	municipio: string;
	codigoPolo: string;
	codigoCurso: string;
	codigoPortfolio: string;
	codigoInstituicao: string;
	codigoUnidadeEnsino: string;
	codigoCicloMatricula: string;
	unidadeEnsino: string;
	curso: string;
	subtipoCurso: string;
	oferta: string;
	tipoOfertaCurso: string;
	cargaHorariaMinima: string;
	cargaHorariaEstagio: string;
	cargaHorariaTotal: string;
	cicloMatricula: string;
	situacaoCiclo: string;
	situacaoETEC: string;
	statusCicloMatricula: string;
	dataInicioCurso: string;
	dataFimPrevistoCurso: string;
	modalidadeEnsino: string;
	estagio: string;
	projetoPedagogico: string;
	qtdVagas: string;
	qtdInscritos: string;
	qtdMatriculas: string;
}
