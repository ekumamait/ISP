import Provider from './../models/Providers';
import connection from './../connection';

class Providers {  
  /**
   * Create A Provider
   * @param {object} req 
   * @param {object} res
   * @returns {object} provider object 
   */
  static async addProvider(req, res) {
    try {
      const data = new Provider(req.body);
      await data.save();
      return res.status(201).send({
        status: 201,
        message: 'provider successfully added',
        data
    });
    } catch(error) {
      return res.status(400).send(
        {
          status: 400,
          message: 'Oops failed to add provider',
          error
      });
    }
  }

  /**
   * Get All Providers
   * @param {object} req 
   * @param {object} res 
   * @returns {object} Providers array
   */
  static async getAllProviders(req, res) {
    try {
      const data = await Provider.find({});
      return res.status(200).send(
        { 
          status: 200,
          message: 'All available Providers',
          data
        });
    } catch(error) {
      return res.status(400).send(
        { 
          status: 400,
          message: 'Oops failed to fetch providers',
          error
        });
    }
  }

  /**
   * Get A Single Provider
   * @param {object} req 
   * @param {object} res
   * @returns {object} Provider object
   */
  static async getOneProvider(req, res) {
    const data = await Provider.findById(req.params.id)
    try {     
      return res.status(200).send(
        { 
          status: 200,
          message: 'Internet Service Provider',
          data
        }
);
    } catch(error) {
      return res.status(400).send({ 
          status: 400,
          message: 'Oops failed to fetch all providers',
          error
    })
    }
  }

  /**
   * Update A Provider
   * @param {object} req 
   * @param {object} res 
   * @returns {object} Provider object
   */
  static async updateProvider(req, res) {
    try {
      const data = new Provider(req.body);
      await data.updateOne(req.params.id)
      return res.status(200).send({ 
        status: 200,
        message: 'Provider updated succefully',
        data 
    });
    } catch(error) {
      return res.status(400).send({ 
          status: 400,
          message: 'Oops failed to update the provider',
          error
        });
    }
  }

  /**
   * Delete A Provider
   * @param {object} req 
   * @param {object} res 
   * @returns {void} return status code 200 and message 
   */
  static async deleteProvider(req, res) {
    try {
      await Provider.deleteOne(req.params.id)
      return res.status(200).send({ 
        status: 200,
        message: 'Provider deteled succefully',
        data: [] 
});
    } catch(error) {
      return res.status(400).send({ 
          status: 400,
          message: 'Oops failed to delete the provider',
          error
        });
    }
  }
}

export default Providers;
