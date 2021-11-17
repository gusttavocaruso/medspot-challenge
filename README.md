
### Desafio Tech Medspot

  O desafio consiste no desenvolvimento de 2 componentes principais que devem conversar
entre si para realizar a marcação e o acompanhamento de consultas simples.

- Requisito 1: Formulário para marcação de consulta.
O sistema deverá ser capaz de registrar uma consulta recebendo de um formulário
os dados do nome do paciente e hora da consulta (Pode considerar que todas consultas
marcadas serão para o mesmo dia, logo desconsidere o dia da marcação). O campo de
nome deve ser um campo de texto, já o campo de hora não tem um tipo definido, pode ser o
de preferência do desenvolvedor para o caso exigido. <br/>
  IMPORTANTE: os horários das consultas serão de 30 minutos. uma vez que uma consulta é
marcada para um horário, outra não deve poder ser marcada para o mesmo horário. O
sistema deve aceitar consultas das 9:00 às 18:00.

- Requisito 2: Acompanhamento de consultas marcadas.
O sistema deverá ser capaz de exibir as consultas já marcadas, na ordem do
horário. As consultas que deverão ocorrer em até 2 horas do horário atual devem receber
um destaque (de tamanho, cor ou alguma outra forma, fica a critério do desenvolvedor).
Cada consulta deve poder ser cancelada, liberando o horário para outra consulta, mas não
excluindo o item da consulta cancelada, com fim da manutenção de um histórico. O único
filtro obrigatório para esse requisito é um switch para mostrar apenas consultas válidas ou
todas as consultas (válidas ou canceladas), mas filtros de outras formas serão bem vindos.
