const RNA_COMPLEMENTS = {
  G : "C",
  C : "G",
  T : "A",
  A : "U"
} as const

type code = keyof typeof RNA_COMPLEMENTS;

export function toRna(dna_strand:string) :string{

  // loop through the string and generate the complement 
  let complement_strand = "";

    for(let i=0; i<dna_strand.length ; i++){
      // use as code to remove error - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type
      // so each dna_strand code is asserted into the code type! 
      // console.log(RNA_COMPLEMENTS[dna_strand[i] as code])
      if(RNA_COMPLEMENTS[dna_strand[i] as code]=== undefined){
        throw new Error ("Invalid input DNA.")
      }
      complement_strand = complement_strand + RNA_COMPLEMENTS[dna_strand[i] as code]
    }


  return complement_strand
}
