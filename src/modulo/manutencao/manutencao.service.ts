import { Injectable } from '@nestjs/common';
import { ManutencaoModel } from './manutencao.model';

@Injectable()
export class ManutencaoService {
    constructor(
    @InjectRepository(ManutencaoModel)
    private readonly manutencaorepository:(ManutencaoModel)
){}
}
