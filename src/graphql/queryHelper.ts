import { BuchFields, FilterParameter, SuchkriterienInput } from "@graphql/interfaces";

export const buildQuery = (
    queryFields?: BuchFields[],
    suchkrieterien?: SuchkriterienInput,
): string => {
    let fields = '';

    if (queryFields && queryFields.length > 0) {
        for (const buchField of queryFields) {
            switch (buchField) {
                case BuchFields.id:
                    fields += `
                        id
                    `;
                    break;
                case BuchFields.version:
                    fields += `
                        version
                    `;
                    break;
                case BuchFields.isbn:
                    fields += `
                        isbn
                    `;
                    break;
                case BuchFields.rating:
                    fields += `
                        rating
                    `;
                    break;
                case BuchFields.art:
                    fields += `
                        art
                    `;
                    break;
                case BuchFields.preis:
                    fields += `
                        preis
                    `;
                    break;
                case BuchFields.rabatt:
                    fields += `
                        rabatt
                    `;
                    break;
                case BuchFields.lieferbar:
                    fields += `
                        lieferbar
                    `;
                    break;
                case BuchFields.datum:
                    fields += `
                        datum
                    `;
                    break;
                case BuchFields.homepage:
                    fields += `
                        homepage
                    `;
                    break;
                case BuchFields.schlagwoerter:
                    fields += `
                        schlagwoerter
                    `;
                    break;
                case BuchFields.titel:
                    fields += `
                        titel {
                            titel
                            untertitel
                        }
                    `;
                    break;
                default:
                    break;
            }
        }
    } else {
        fields = `
            id
            version
            isbn
            rating
            art
            preis
            rabatt
            lieferbar
            datum
            homepage
            schlagwoerter
            titel {
                titel
                untertitel
            }
        `;
    }
    const filter = `buecher(suchkriterien: ${suchkrieterien})`;

    return `{${filter} {${fields}}}`;
};